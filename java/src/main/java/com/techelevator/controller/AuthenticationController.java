package com.techelevator.controller;

import javax.annotation.security.PermitAll;
import javax.validation.Valid;

import com.techelevator.business.UserService;
import com.techelevator.model.LoginDTO;
import com.techelevator.model.RegisterUserDTO;
import com.techelevator.repository.UserRepository;
import com.techelevator.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.annotation.JsonProperty;
//import com.techelevator.dao.UserDao;


//import com.techelevator.model.User;
import com.techelevator.exceptions.UserAlreadyExistsException;
import com.techelevator.security.jwt.JWTFilter;
import com.techelevator.security.jwt.TokenProvider;

@RestController
@CrossOrigin
public class AuthenticationController {

    private final TokenProvider tokenProvider;
    @Autowired
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    //private UserDao userDao;
    @Autowired
    private final UserService userService;

    public AuthenticationController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder, UserRepository userRepository, UserService userService) {
//    public AuthenticationController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder, UserDao userDao) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
//        this.userDao = userDao;
          this.userService = userService;
    }

    @PermitAll
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginDTO loginDto) {
        User user = null;

//TODO authorities issue ?? _postman login not working

            user = userService.findByUsername(loginDto.getUsername());
            user.addRoleToAuthorities("USER");

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.createToken(authentication, false);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return new ResponseEntity<>(new LoginResponse(jwt, user), httpHeaders, HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public void register(@Valid @RequestBody RegisterUserDTO newUser) {

        try {
            User user = userService.findByUsername(newUser.getUsername());
            if(user == null){
                throw new UsernameNotFoundException("");
            }
            throw new UserAlreadyExistsException();
        } catch (UsernameNotFoundException e) {
            userService.create(newUser.getUsername(), newUser.getPassword(), newUser.getRole());
        }
//        try {
//            User user = userService.findByUsername(newUser.getUsername());
//            if(user == null){
//                throw new UsernameNotFoundException("");
//            }
//            throw new UserAlreadyExistsException();
//        } catch (UsernameNotFoundException e) {
//            userService.create(newUser.getUsername(),newUser.getPassword(), newUser.getRole());
//        }
    }

    /**
     * Object to return as body in JWT Authentication.
     */
    static class LoginResponse {

        private String token;
        private User user;

        LoginResponse(String token, User user) {
            this.token = token;
            this.user = user;
        }

        @JsonProperty("token")
        String getToken() {
            return token;
        }

        void setToken(String token) {
            this.token = token;
        }

        @JsonProperty("user")
		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}
    }
}

