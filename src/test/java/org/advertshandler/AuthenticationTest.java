package org.advertshandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.advertshandler.auth.model.Role;
import org.advertshandler.auth.model.User;
import org.advertshandler.auth.repo.UserRepository;


import org.advertshandler.auth.rest.dto.AuthenticationRequest;
import org.advertshandler.auth.rest.dto.AuthentificationResponse;
import org.advertshandler.auth.rest.dto.RegistrationRequest;
import org.advertshandler.auth.rest.dto.RegistrationResponse;
import org.advertshandler.auth.security.JwtService;

import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.core.IsNull.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.springframework.test.web.servlet.MvcResult;

import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application-integrationtest.properties")
public class AuthenticationTest {

    private final String TEST_USERNAME = "testuser";

    private final String TEST_PASSWORD = "testpassword";

    private final String TEST_REGISTER_USERNAME = "newuser";

    private final String TEST_REGISTER_PASSWORD = "newpassword";

    private final String TEST_REGISTER_FULLNAME = "newfullname";

    @Autowired
    private MockMvc mvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private JwtService jwtService;

    private User user;


    private User userWrong = User.builder()
            .password("passwordwrong").username("user")
            .roles(List.of(Role.FREE_TIER))
            .build();

    @BeforeEach
    public void setup() {
        user = User.builder()
                .password(passwordEncoder.encode(TEST_PASSWORD))
                .username(TEST_USERNAME)
                .roles(List.of(Role.FREE_TIER))
                .build();
        userRepository.save(user);
    }


    @Test
    public void givenUser_whenAuthentificate_returnToken() throws Exception {
        AuthenticationRequest request = new AuthenticationRequest(TEST_USERNAME, TEST_PASSWORD);
        MvcResult result = mvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token", notNullValue()))
                .andDo(print())
                .andReturn();

        AuthentificationResponse response = objectMapper
                .readValue(result.getResponse().getContentAsString(),
                        AuthentificationResponse.class);
        String token = response.getToken();
        Authentication authentication = jwtService.getAuthentication(token);

        assertThat(authentication.getName(), is(TEST_USERNAME));
        assertThat(authentication.getAuthorities().size(), is(1));
        assertThat(authentication.getAuthorities().iterator().next().getAuthority(), is("FREE_TIER"));
    }

    @Test
    public void givenToken_thenAuthentificationOk() throws Exception {
        AuthenticationRequest request = new AuthenticationRequest(TEST_USERNAME, TEST_PASSWORD);
        MvcResult result = mvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token", notNullValue()))
                .andDo(print())
                .andReturn();

        AuthentificationResponse response = objectMapper
                .readValue(result.getResponse().getContentAsString(),
                        AuthentificationResponse.class);
        String token = response.getToken();

        mvc.perform(get("/adverts/events")
                        .header("Authorization", "Bearer " + token)
                        .accept("application/json;charset=UTF-8"))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void shouldRegisterUser() throws Exception {
        RegistrationRequest registrationRequest = new RegistrationRequest();
        registrationRequest.setUsername(TEST_REGISTER_USERNAME);
        registrationRequest.setPassword(TEST_REGISTER_PASSWORD);
        registrationRequest.setFullname(TEST_REGISTER_FULLNAME);

        mvc.perform(post("/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(registrationRequest)))
                .andExpect(status().isOk());
        User registeredUser = userRepository.findByUsername(TEST_REGISTER_USERNAME).get();
        assertThat(registeredUser, is(notNullValue()));
        assertThat(registeredUser.getUsername(), is(TEST_REGISTER_USERNAME));
        assertThat(registeredUser.getPassword(), is(notNullValue()));
        assertThat(registeredUser.getRoles().get(0), is(Role.FREE_TIER));

    }

    @Test
    public void givenWrongUser_AccessForbidden() throws Exception {
        mvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(userWrong)))
                .andExpect(status().isForbidden());
    }

    @Test
    public void shouldUpgradeToPremium() throws Exception {
        RegistrationRequest registrationRequest = new RegistrationRequest();
        registrationRequest.setUsername(TEST_REGISTER_USERNAME);
        registrationRequest.setPassword(TEST_REGISTER_PASSWORD);
        registrationRequest.setFullname(TEST_REGISTER_FULLNAME);

        MvcResult result = mvc.perform(post("/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(registrationRequest)))
                .andExpect(status().isOk())
                .andReturn();

        RegistrationResponse response = objectMapper
                .readValue(result.getResponse().getContentAsString(),
                        RegistrationResponse.class);
        String token = response.getToken();

        mvc.perform(put("/auth/premium")
                .header("Authorization", "Bearer " + token)
                .accept("application/json;charset=UTF-8"));

        User premiumUpgradedUser = userRepository.findByUsername(TEST_REGISTER_USERNAME).orElse(null);

        assertThat(premiumUpgradedUser, is(notNullValue()));
        assertThat(premiumUpgradedUser.getRoles(), containsInAnyOrder(Arrays.array(Role.FREE_TIER, Role.COMMERCIAL_USE)));

    }

    @AfterEach
    public void cleanup() {
        userRepository.deleteAll();
    }
}
