package org.advertshandler.auth.rest;

import lombok.RequiredArgsConstructor;
import org.advertshandler.auth.model.User;
import org.advertshandler.auth.repo.UserRepository;
import org.advertshandler.auth.rest.dto.AuthenticationRequest;
import org.advertshandler.auth.rest.dto.AuthentificationResponse;
import org.advertshandler.auth.rest.dto.RegistrationRequest;
import org.advertshandler.auth.rest.dto.RegistrationResponse;
import org.advertshandler.auth.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/auth")
@CrossOrigin
@RequiredArgsConstructor
public class AuthenticationController {

    @Autowired
    private final JwtService jwtService;

    @Autowired
    private final UserRepository users;

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<RegistrationResponse> register(@RequestBody RegistrationRequest registrationRequest) {
        User registeredUser = authenticationService.signup(registrationRequest);
        String token = jwtService.createToken(registeredUser.getUsername(), this.users.findByUsername(registeredUser.getUsername())
                .orElseThrow(() -> new UsernameNotFoundException("Username " + registeredUser.getUsername() + "not found")).getRoles());
        RegistrationResponse response = new RegistrationResponse(registeredUser.getUsername(), token);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthentificationResponse> login(@RequestBody AuthenticationRequest request) {

        try {
            User user = authenticationService.authenticate(request);
            String token = jwtService.createToken(user.getUsername(), this.users.findByUsername(user.getUsername())
                    .orElseThrow(() -> new UsernameNotFoundException("Username " + user.getUsername() + "not found")).getRoles());
            AuthentificationResponse response = new AuthentificationResponse(user.getUsername(), token);
            return ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }

    @PutMapping("/premium")
    public ResponseEntity<User>  upgradeToPremium(@AuthenticationPrincipal UserDetails userDetails) {
        User user = authenticationService.upgradeToPremium(userDetails);
        return ok(user);
    }
}
