import { assert } from "chai";
import { createHelpers } from "yeoman-test";
import path from "path";
import * as fs from "fs";


const PROJECT_NAME = "my-project";
const GROUP_ID = "com.danielsaldivar"
const GROUP_ID_DIRECTORY = GROUP_ID.split(".").join("/")
describe("generator-java-junit:app", () => {


  let runResult: any;
  const helpers = createHelpers({});

  beforeEach(async () => {
    runResult = await helpers
      .create(path.resolve(path.resolve(), "generators/app"), {}, {})
      .withPrompts({
        projectName: PROJECT_NAME,
        groupId: GROUP_ID
      })
      .run();
  });

  afterEach(() => {
    if (runResult !== undefined) {
      runResult.restore();
    }
  });

  it("creates pom file", () => {
    assert(fs.existsSync(`${PROJECT_NAME}/pom.xml`), "pom.xml should be created");
    assert(fs.existsSync(`${PROJECT_NAME}/.gitignore`), ".gitignore should be created");
  });


  it("creates main files", () => {
    assert(fs.existsSync(`${PROJECT_NAME}/src/main/${GROUP_ID_DIRECTORY}/demo/DemoApplication.java`), `${PROJECT_NAME}/src/main/${GROUP_ID_DIRECTORY}/demo/DemoApplication.java should be created`);
  });


  it("creates test files", () => {
    assert(fs.existsSync(`${PROJECT_NAME}/src/test/${GROUP_ID_DIRECTORY}/demo/DemoApplicationTest.java`), `${PROJECT_NAME}/src/test/${GROUP_ID_DIRECTORY}/demo/DemoApplicationTest.java should be created`);
  });

});
