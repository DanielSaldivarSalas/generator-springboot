package <%= groupId %>.demo;


import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.*;

import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoadsTest() {
    assertThat(true)
      .isTrue();
	}

}
