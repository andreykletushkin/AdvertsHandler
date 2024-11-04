package org.advertshandler.auth.rest;

import lombok.RequiredArgsConstructor;
import org.advertshandler.auth.model.Role;
import org.advertshandler.auth.model.User;
import org.advertshandler.auth.repo.UserRepository;
import org.advertshandler.auth.rest.dto.AuthenticationRequest;
import org.advertshandler.auth.rest.dto.RegistrationRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public User signup(RegistrationRequest input) {
        User user = User.builder()
                .fullName(input.getFullName())
                .username(input.getUsername())
                .roles(List.of(Role.FREE_TIER))
                .password(passwordEncoder.encode(input.getPassword()))
                .build();

        return userRepository.save(user);
    }

    public User authenticate(AuthenticationRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));

        return userRepository.findByUsername(request.getUsername())
                .orElseThrow();
    }

    public User upgradeToPremium(UserDetails user) {
        User userFromDb = userRepository.findByUsername(user.getUsername()).get();
        userFromDb.getRoles().add(Role.COMMERCIAL_USE);
        return userRepository.save(userFromDb);

    }
}
