const configEnvOption: Fig.Option = {
  name: "--config-env",
  description:
    "The environment name specifying the default parameter values in the configuration file to use",
  args: { name: "environment" },
};

const configFileOption: Fig.Option = {
  name: "--config-file",
  description:
    "The path and file name of the configuration file containing default parameter values to use",
  args: { name: "config file" },
};

const containerEnvVarsOption: Fig.Option = {
  name: "--container-env-vars",
  description:
    "JSON file containing environment variables to be set within the container environment",
  args: { name: "path", template: "filepaths" },
};

const containerHostOption: Fig.Option = {
  name: "--container-host",
  description: "Host of locally emulated Lambda container",
  args: { name: "text" },
};

const containerHostInterfaceOption: Fig.Option = {
  name: "--container-host-interface",
  description:
    "IP address of the host network interface that container ports should bind to. Use 0.0.0.0 to bind to all interfaces",
  args: { name: "text" },
};

const debugOption: Fig.Option = {
  name: "--debug",
  description:
    "Turn on debug logging to print debug message generated by SAM CLI and display timestamps",
};

const debugFunctionOption: Fig.Option = {
  name: "--debug-function",
  description:
    "Specifies the Lambda Function logicalId to apply debug options to when --warm-containers is specified.  This parameter applies to --debug-port, --debugger-path, and --debug-args",
  args: { name: "text" },
  dependsOn: ["--warm-containers"],
};

const debugPortOption: Fig.Option = {
  name: ["-d", "--debug-port"],
  description:
    "When specified, Lambda function will start in debug mode and expose this port to localhost",
  args: { name: "port number" },
  isRepeatable: true,
};

const debuggerArgsOption: Fig.Option = {
  name: "--debugger-args",
  description: "Additional arguments to be passed to the debugger",
  args: { name: "text" },
};

const debuggerPathOption: Fig.Option = {
  name: "--debugger-path",
  description: "Host path to a debugger to mount into the Lambda container",
  args: { name: "text" },
};

const dockerNetworkOption: Fig.Option = {
  name: "--docker-network",
  description:
    "Specifies the name or id of an existing docker network to lambda docker containers should connect to, " +
    "along with the default bridge network. If not specified, the Lambda containers will only connect to the default bridge docker network.",
  args: { name: "network name" },
};

const dockerVolumeBasedirOption: Fig.Option = {
  name: ["-v", "--docker-volume-basedir"],
  description: "Location basedir where the SAM file exists",
  args: { name: "text" },
};

const envVarsOption: Fig.Option = {
  name: ["-n", "--env-vars"],
  description:
    "JSON file containing values for Lambda function environment variables",
  args: { name: "path", template: "filepaths" },
};

const forceImageBuildOption: Fig.Option = {
  name: "--force-image-build",
  description: "Whether the image should be rebuilt",
};

const forceUploadOption: Fig.Option = {
  name: "--force-upload",
  description:
    "Indicates whether to override existing files in the S3 bucket. Specify this flag to upload artifacts even if they match existing artifacts in the S3 bucket",
};

const helpOption: Fig.Option = {
  name: ["--help", "-h"],
  description: "Show help for sam",
};

const hostOption: Fig.Option = {
  name: "--host",
  description: "Local hostname or IP address to bind to",
  args: { name: "text", description: "Default: '127.0.0.1'" },
};

const imageRepositoryOption: Fig.Option = {
  name: "--image-repository",
  description:
    "ECR repo uri where this command uploads the image artifacts that are referenced in your template",
  args: { name: "repo URI" },
};

const imageRepositoriesOption: Fig.Option = {
  name: ["--image-repositories", ""],
  description: "Specify mapping of Function Logical ID to ECR Repo uri",
  args: {
    name: "mapping",
    description: "Example: Function_Logical_ID=ECR_Repo_Uri",
  },
  isRepeatable: true,
};

const invokeImageOption: Fig.Option = {
  name: ["-ii", "--invoke-image"],
  description:
    "Container image URIs for invoking functions or starting api and function",
  args: { name: "text" },
};

const kmsKeyIdOption: Fig.Option = {
  name: "--kms-key-id",
  description:
    "The ID of an AWS KMS key that the command uses to encrypt artifacts that are at rest in the S3 bucket",
  args: { name: "kms key id" },
};

const layerCacheBaseDirOption: Fig.Option = {
  name: "--layer-cache-basedir",
  description: "Location where Layers your template uses will be downloaded to",
  args: { name: "directory", template: "folders" },
};

const logFileOption: Fig.Option = {
  name: ["-l", "--log-file"],
  description: "Log file to send runtime logs to",
  args: { name: "text" },
};

const metadataOption: Fig.Option = {
  name: "--metadata",
  description:
    "A map of metadata to attach to ALL the artifacts that are referenced in your template",
  args: { name: "map" },
};

const noProgressBarOption: Fig.Option = {
  name: "--no-progressbar",
  description:
    "Does not showcase a progress bar when uploading artifacts to s3",
};

const parameterOverridesOption: Fig.Option = {
  name: "--parameter-overrides",
  description:
    "A string that contains AWS CloudFormation parameter overrides encoded as key=value pairs",
  args: {
    name: "override string",
    description:
      "For example, 'ParameterKey=KeyPairName,ParameterValue=MyKey ParameterKey=InstanceType,ParameterValue=t1.micro' or 'KeyPairName=MyKey InstanceType=t1.micro'",
  },
};

const portOption: Fig.Option = {
  name: ["-p", "--port"],
  description: "Local port to listen on",
  args: { name: "port number", description: "Default: 3000" },
};

const profileOption: Fig.Option = {
  name: "--profile",
  description:
    "Select a specific profile from your credential file to get AWS credentials",
  args: {
    name: "profile name",
    description: "The name of the AWS profile",
  },
};

const regionOption: Fig.Option = {
  name: "--region",
  description: "Set the AWS Region of the service",
  args: { name: "region" },
};

const resolveS3Option: Fig.Option = {
  name: "--resolve-s3",
  description:
    "Automatically resolve s3 bucket for non-guided deployments. Enabling this option will also create a managed default s3 bucket for you",
};

const s3BucketOption: Fig.Option = {
  name: "--s3-bucket",
  description:
    "The name of the S3 bucket where this command uploads the artifacts that are referenced in your template",
  args: { name: "bucket name" },
};

const s3PrefixOption: Fig.Option = {
  name: "--s3-prefix",
  description:
    "A prefix name that the command adds to the artifacts name when it uploads them to the S3 bucket",
  args: {
    name: "prefix",
    description:
      "The prefix name is a path name (folder name) for the S3 bucket",
  },
};

const signingProfilesOption: Fig.Option = {
  name: "--signing-profiles",
  description: "A string that contains Code Sign configuration parameters",
  args: {
    name: "profiles",
    description:
      "Example: FunctionOrLayerNameToSign=SigningProfileName:SigningProfileOwner",
  },
};

const shutdownOption: Fig.Option = {
  name: "--shutdown",
  description:
    "If set, will emulate a shutdown event after the invoke completes, in order to test extension handling of shutdown behavior",
};

const skipPullImageOption: Fig.Option = {
  name: "--skip-pull-image",
  description:
    "Specify whether CLI should skip pulling down the latest Docker image for Lambda runtime",
};

const stackNameOption: Fig.Option = {
  name: "--stack-name",
  description:
    "The name of the AWS CloudFormation stack you're deploying to. If you specify an existing stack, the command updates the stack. If you specify a new stack, the command creates it",
  args: { name: "cloudformation stack name" },
};

const templateFileOption: Fig.Option = {
  name: ["-t", "--template-file", "--template"],
  description: "AWS SAM template file",
  args: { name: "path", template: "filepaths" },
};

const useJsonOption: Fig.Option = {
  name: "--use-json",
  description:
    "Indicates whether to use JSON as the format for the output AWS CloudFormation template. YAML is used by default",
};

const warmContainersOption: Fig.Option = {
  name: "--warm-containers",
  description: "Specific how SAM manages the containers for each function",
  args: {
    name: "mode",
    suggestions: [
      {
        name: "eager",
        description:
          "Containers for all functions are loaded at startup and persist between invocations",
      },
      {
        name: "lazy",
        description:
          "Containers are only loaded when each function is first invoked. Those containers persist for additional invocations",
      },
    ],
  },
};

const completionSpec: Fig.Spec = {
  name: "sam",
  description: "AWS Serverless Application Model CLI",
  subcommands: [
    {
      name: "init",
      description: "Init an AWS SAM application",
      options: [
        configEnvOption,
        configFileOption,
        debugOption,
        helpOption,
        {
          name: "--no-interactive",
          description:
            "Disable interactive prompting for init parameters, and fail if any required values are missing",
        },
        {
          name: ["-a", "--architecture"],
          description: "Architectures your Lambda function will run on",
          args: { name: "architecture", suggestions: ["arm64", "x86_64"] },
        },
        {
          name: ["-l", "--location"],
          description: "Template location (git, mercurial, http(s), zip, path)",
          args: { name: "location" },
        },
        {
          name: ["-r", "--runtime"],
          description: "Lambda Runtime for your app",
          args: {
            name: "runtime",
            suggestions: [
              "dotnetcore3.1",
              "go1.x", // TODO: Can we exclude a suggestion if `arch === arm64`?
              "java11",
              "java8.al2",
              "java8",
              "nodejs14.x",
              "nodejs12.x",
              "python3.9",
              "python3.8",
              "python3.7",
              "python3.6",
              "ruby2.7",
            ],
          },
        },
        {
          name: ["-p", "--package-type"],
          description: "Package type for your app",
          args: { name: "type", suggestions: ["zip", "image"] },
        },
        {
          name: ["-i", "--base-image"],
          description: "Lambda Image of your app",
          args: {
            name: "image name",
            suggestions: [
              "amazon/dotnetcore3.1-base",
              "amazon/go1.x-base",
              "amazon/java11-base",
              "amazon/java8.al2-base",
              "amazon/java8-base",
              "amazon/nodejs14.x-base",
              "amazon/nodejs12.x-base",
              "amazon/python3.9-base",
              "amazon/python3.8-base",
              "amazon/python3.7-base",
              "amazon/python3.6-base",
              "amazon/ruby2.7-base",
            ],
          },
        },
        {
          name: ["-d", "--dependency-manager"],
          description: "Dependency manager for your Lambda runtime",
          args: {
            name: "manager",
            suggestions: [
              "npm",
              "mod",
              "gradle",
              "cli-package",
              "bundler",
              "pip",
              "maven",
            ],
          },
        },
        {
          name: ["-o", "--output-dir"],
          description: "Where to output the initialized app into",
          args: { name: "path" },
        },
        {
          name: ["-n", "--name"],
          description: "Name of your project to be generated as a folder",
          args: { name: "text" },
        },
        {
          name: "--app-template",
          description:
            "Identifier of the managed application template you want to use",
          args: { name: "text", description: "Template name" },
        },
        {
          name: "--no-input",
          description:
            "Disable Cookiecutter prompting and accept default values defined template config",
        },
        {
          name: "--extra-context",
          description:
            "Override any custom parameters in the template's cookiecutter.json configuration",
          args: {
            name: "text",
            description:
              'E.g. {"customParam1": "customValue1", "customParam2":"customValue2"}',
          },
        },
      ],
    },
    {
      name: "validate",
      description: "Validate an AWS SAM template",
      options: [
        configEnvOption,
        configFileOption,
        debugOption,
        helpOption,
        profileOption,
        regionOption,
        templateFileOption,
      ],
    },
    {
      name: "build",
      description: "Build your Lambda function code",
      options: [
        configEnvOption,
        configFileOption,
        debugOption,
        dockerNetworkOption,
        helpOption,
        parameterOverridesOption,
        profileOption,
        regionOption,
        skipPullImageOption,
        templateFileOption,
        {
          name: ["-u", "--use-container"],
          description:
            "If your functions depend on packages that have natively compiled dependencies, " +
            "use this flag to build your function inside an AWS Lambda-like Docker container",
        },
        {
          name: ["-e", "--container-env-var"],
          description:
            "Input environment variables through command line to pass into build containers, " +
            "you can either input function specific format (FuncName.VarName=Value) or global format (VarName=Value)",
          args: { name: "env var" },
          isRepeatable: true,
        },
        {
          name: ["-ef", "--container-env-var-file"],
          description:
            "Path to environment variable json file (e.g., env_vars.json) to pass into build containers",
          args: { name: "path", template: "filepaths" },
        },
        {
          name: ["-bi", "--build-image"],
          description: "Container image URIs",
          args: {
            name: "image uri",
            description:
              // TODO: How to have the description wrap in the expanded text for longer descriptions?
              "Container image URIs for building functions/layers. " +
              "You can specify for all functions/layers with just the image URI (--build-image public.ecr.aws/sam/build-nodejs14.x:latest). " +
              "You can specify for each individual function with (--build-image FunctionLogicalID=public.ecr.aws/sam/build-nodejs14.x:latest). " +
              "A combination of the two can be used. If a function does not have build image specified or " +
              "an image URI for all functions, the default SAM CLI build images will be used.",
          },
          isRepeatable: true,
        },
        {
          name: ["-p", "--parallel"],
          description: "Enabled parallel builds",
        },
        {
          name: ["-b", "--build-dir"],
          description:
            "Path to a folder where the built artifacts will be stored",
          args: { name: "directory", template: "folders" },
        },
        {
          name: ["-cd", "--cache-dir"],
          description:
            "The folder where the cached artifacts are stored with `--cached` is specified",
          args: { name: "directory", template: "folders" },
        },
        {
          name: ["-s", "--base-dir"],
          description:
            "Resolve relative paths to function's source code with respect to this folder",
          args: { name: "directory", template: "folders" },
        },
        {
          name: ["-m", "--manifest"],
          description:
            "Path to a custom dependency manifest to use instead of the default one",
          args: { name: "directory", template: "folders" },
        },
        {
          name: ["-c", "--cached"],
          description:
            "Enable cached builds. Use this flag to reuse build artifacts that have not changed from previous builds",
        },
        {
          name: ["--beta-features", "--no-beta-features"],
          description: "Should beta features be enabled",
        },
      ],
    },
    {
      name: "local",
      description:
        "Run your Serverless application locally for quick development & testing",
      options: [helpOption],
      subcommands: [
        {
          name: "generate-event",
          description:
            "You can use this command to generate sample payloads from different event sources such as S3, API Gateway, and SNS",
          options: [helpOption],
          // TODO: add all subcommands - it's lengthy...
        },
        {
          name: "invoke",
          description: "Invokes a local Lambda function once",
          options: [
            configEnvOption,
            configFileOption,
            containerEnvVarsOption,
            containerHostInterfaceOption,
            containerHostOption,
            debuggerArgsOption,
            debuggerPathOption,
            debugOption,
            debugPortOption,
            dockerNetworkOption,
            dockerVolumeBasedirOption,
            envVarsOption,
            forceImageBuildOption,
            helpOption,
            invokeImageOption,
            layerCacheBaseDirOption,
            logFileOption,
            parameterOverridesOption,
            profileOption,
            regionOption,
            shutdownOption,
            skipPullImageOption,
            templateFileOption,
            {
              name: ["-e", "--event"],
              description:
                "JSON file containing event data passed to the Lambda function",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "start-api",
          description: "Sets up a local endpoint you can use to test your API",
          options: [
            configEnvOption,
            configFileOption,
            containerEnvVarsOption,
            containerHostInterfaceOption,
            containerHostOption,
            debugFunctionOption,
            debuggerArgsOption,
            debuggerPathOption,
            debugOption,
            debugPortOption,
            dockerNetworkOption,
            dockerVolumeBasedirOption,
            envVarsOption,
            forceImageBuildOption,
            helpOption,
            hostOption,
            invokeImageOption,
            layerCacheBaseDirOption,
            logFileOption,
            parameterOverridesOption,
            portOption,
            shutdownOption,
            skipPullImageOption,
            templateFileOption,
            warmContainersOption,
            {
              name: ["-s", "--static-dir"],
              description:
                "Any static assets files locates in this directory will be presented at /",
              args: { name: "path", template: "filepaths" },
            },
          ],
        },
        {
          name: "start-lambda",
          description:
            "Starts a local endpoint you can use to invoke your local Lambda functions",
          options: [
            configEnvOption,
            configFileOption,
            containerEnvVarsOption,
            containerHostInterfaceOption,
            containerHostOption,
            debugFunctionOption,
            debuggerArgsOption,
            debuggerPathOption,
            debugOption,
            debugPortOption,
            dockerNetworkOption,
            dockerVolumeBasedirOption,
            envVarsOption,
            forceImageBuildOption,
            helpOption,
            hostOption,
            invokeImageOption,
            layerCacheBaseDirOption,
            logFileOption,
            parameterOverridesOption,
            portOption,
            profileOption,
            regionOption,
            shutdownOption,
            skipPullImageOption,
            templateFileOption,
            warmContainersOption,
          ],
        },
      ],
    },
    {
      name: "package",
      description: "Package an AWS SAM application",
      options: [
        configEnvOption,
        configFileOption,
        debugOption,
        forceUploadOption,
        helpOption,
        imageRepositoriesOption,
        imageRepositoryOption,
        kmsKeyIdOption,
        metadataOption,
        noProgressBarOption,
        profileOption,
        regionOption,
        resolveS3Option,
        s3BucketOption,
        s3PrefixOption,
        signingProfilesOption,
        templateFileOption,
        useJsonOption,
        {
          name: "--output-template-file",
          description:
            "The path to the file where the command writes the output AWS CloudFormation template. If unspecified, the command writes the template to the standard output",
          args: { name: "path" },
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy an AWS SAM application",
      options: [
        configEnvOption,
        configFileOption,
        // guidedOption,
        templateFileOption,
        // noExecuteChangesetOption,
        // failOnEmptyChangesetOption,
        // confirmChangesetOption,
        // disableRollbackOption,
        stackNameOption,
        s3BucketOption,
        imageRepositoryOption,
        imageRepositoriesOption,
        forceUploadOption,
        s3PrefixOption,
        kmsKeyIdOption,
        // roleArn,
        useJsonOption,
        resolveS3Option,
        // resolveImageRepos.
        metadataOption,
        // notificationArn,
        // tags,
        parameterOverridesOption,
        signingProfilesOption,
        noProgressBarOption,
        // capabilities,
        profileOption,
        regionOption,
        debugOption,
        helpOption,
      ],
    },
    {
      name: "delete",
      description:
        "Delete an AWS SAM application and the artifacts created by `sam deploy`",
      options: [
        configEnvOption,
        configFileOption,
        debugOption,
        helpOption,
        profileOption,
        regionOption,
        stackNameOption,
        {
          name: "--no-prompts",
          description:
            "Specify this flag to allow SAM CLI to skip through the guided prompts",
          isDangerous: true,
        },
      ],
    },
    {
      name: "logs",
      description: "Fetch logs for a function",
      options: [
        configEnvOption,
        configFileOption,
        // nameOption,
        stackNameOption,
        // filterOption,
        // includeTracesOption,
        // cloudwatchLogGroupOption,
        // unformattedOption,
        // tailOption,
        // endTimeOption,
        // startTimeOption,
        // betaFeaturesOption
        debugOption,
        profileOption,
        regionOption,
        helpOption,
      ],
    },
    {
      name: "publish",
      description:
        "Publish a packaged AWS SAM template to the AWS Serverless Application Repository",
      options: [
        configEnvOption,
        configFileOption,
        debugOption,
        helpOption,
        profileOption,
        regionOption,
        templateFileOption,
        {
          name: "--semantic-version",
          description:
            "The value provided here overrides SemanticVersion in the template metadata",
          args: { name: "text" },
        },
      ],
    },
    {
      name: "traces",
      description: "[Beta Feature] Fetch AWS X-Ray traces",
      // TODO: very similar to logs
    },
    {
      name: "sync",
      description: "[Beta Feature] Sync a project to AWS",
      // TODO: complete this
    },
    {
      name: "pipeline",
      description: "Manage the continuous delivery of the application",
      options: [helpOption],
      subcommands: [
        // TODO: complete this
        {
          name: "init",
          description: "Generates a CI/CD pipeline configuration file",
        },
        {
          name: "bootstrap",
          description:
            "Generates the required AWS resources to connect your CI/CD system",
        },
      ],
    },
  ],
  options: [
    debugOption,
    helpOption,
    {
      name: "--version",
      description: "Show the version and exit",
    },
    {
      name: "--info",
    },
  ],
};
export default completionSpec;
