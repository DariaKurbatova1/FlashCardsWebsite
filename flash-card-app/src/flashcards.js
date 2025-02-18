export const flashcards = [
    {
      "id": "1.2",
      "question": "What is the main difference between delivery and deployment?",
      "answer": "Delivery refers to preparing artifacts to install or run, while deployment involves running the software as a service."
    },
    {
      "id": "1.3",
      "question": "Give an example of delivery and deployment.",
      "answer": "Delivery: Uploading an Android app to Google Play. Deployment: Running the app on a cloud server and managing its resources."
    },
    {
      "id": "2.1",
      "question": "What does 'shift left' mean in DevOps?",
      "answer": "'Shift left' means moving operations responsibilities to developers earlier in the process, increasing the involvement of developers in operations tasks."
    },
    {
      "id": "2.2",
      "question": "What is DevOps?",
      "answer": "DevOps is a set of philosophies aimed at integrating development and operations into a unified role to deliver software faster and adapt better to change, with a focus on automation."
    },
    {
      "id": "3.1",
      "question": "What is a Deployment Pipeline?",
      "answer": "A Deployment Pipeline is a system of automated processes designed to move new code additions and updates from version control to production quickly and accurately."
    },
    {
      "id": "3.2",
      "question": "What are the stages in a typical deployment pipeline?",
      "answer": "Stages typically include Commit, Build, Unit Tests, Merge to Trunk, Integration Tests, Staging, Regression Tests, and Deploy."
    },
    {
      "id": "4.1",
      "question": "What does independent deployment mean?",
      "answer": "Independent deployment refers to deploying an artifact into an environment that closely resembles production for further testing, often before the final production deployment."
    },
    {
      "id": "5.1",
      "question": "What might cause caching to become problematic in a CI/CD pipeline?",
      "answer": "Caching can cause issues if outdated or incorrect versions of dependencies are cached, leading to inconsistent builds or deployment failures."
    },
    {
      "id": "6.1",
      "question": "Why is it important for developers to frequently merge their changes in a CI/CD pipeline?",
      "answer": "Frequent merging helps prevent large, conflict-prone changes and ensures that the main branch remains healthy, with up-to-date features and bug fixes."
    },
    {
      "id": "6.2",
      "question": "What is Continuous Integration (CI)?",
      "answer": "CI is the practice where developers merge their changes into the main branch as often as possible, with automated checks running to ensure that the codebase remains stable."
    },
    {
      "id": "7.1",
      "question": "What is Continuous Delivery (CD)?",
      "answer": "Continuous Delivery is the process of automatically producing an artifact that can be released to users, with the deployment to production being triggered manually."
    },
    {
      "id": "7.2",
      "question": "What is Continuous Deployment?",
      "answer": "Continuous Deployment automatically deploys changes to production after they pass all automated checks, with no human intervention required."
    },
    {
      "id": "8.1",
      "question": "What kinds of jobs might be useful in a CI/CD pipeline?",
      "answer": "Jobs in a CI/CD pipeline include linting, building, automated testing, static analysis, security checks, and producing artifacts for further review."
    },
    {
      "id": "9.1",
      "question": "What are examples of pipeline artifacts?",
      "answer": "Examples of pipeline artifacts include working apps in staging environments, packages for local installation, container images, and build logs."
    },
    {
      "id": "9.2",
      "question": "Why is deployment to staging important?",
      "answer": "Deployment to staging allows sharing app versions with teammates or clients for feedback, testing, and debugging before moving to production."
    },
    {
      "id": "10.1",
      "question": "What are the risks of continuous deployment?",
      "answer": "Continuous deployment can be risky, particularly in domains like healthcare and finance, where a failed deployment might have severe consequences."
    },
    {
      "id": "10.2",
      "question": "Why might some industries avoid continuous deployment?",
      "answer": "Industries with lower risk tolerance, such as healthcare or finance, may avoid continuous deployment due to the perceived risks and potential for damage caused by failures."
    },
    {
      "id": "11.1",
      "question": "What role might you play in the CI/CD process?",
      "answer": "Roles in the CI/CD process include Software Developer, Operations Engineer, QA Engineer, Build Engineer, Release Manager, Site Reliability Engineer, and others."
    },
    {
      "id": "12.1",
      "question": "What security risks exist in the deployment pipeline?",
      "answer": "Security risks include malicious actors accessing secrets like API keys, injecting malicious code, causing outages, or misusing deployment resources."
    },
    {
      "id": "12.2",
      "question": "How might a malicious actor exploit the deployment pipeline?",
      "answer": "A malicious actor could steal or reveal sensitive information, deploy malicious code, disrupt the pipeline, or misuse resources like CI/CD minutes."
    },
    {
        "id": "13.1",
        "question": "What is Infrastructure as Code (IaC)?",
        "answer": "Infrastructure as Code is a practice where infrastructure is managed and provisioned through code, often using tools like Terraform or Ansible, making the process automated and repeatable."
      },
      {
        "id": "13.2",
        "question": "What are some benefits of Infrastructure as Code (IaC)?",
        "answer": "IaC provides benefits such as consistent environments, automation, version control, and faster deployment, while reducing human error and manual configuration."
      },
      {
        "id": "14.1",
        "question": "What is a Blue/Green Deployment strategy?",
        "answer": "A Blue/Green Deployment strategy involves running two identical production environments, with one (Blue) serving live traffic and the other (Green) being updated. After testing, the green environment becomes live."
      },
      {
        "id": "14.2",
        "question": "What is the main advantage of Blue/Green Deployment?",
        "answer": "The main advantage of Blue/Green Deployment is that it reduces downtime and minimizes the risk of introducing errors in production by allowing quick rollbacks."
      },
      {
        "id": "15.1",
        "question": "What is a Canary Deployment strategy?",
        "answer": "A Canary Deployment strategy involves rolling out a new version of an application to a small subset of users before gradually expanding to all users, helping detect potential issues early."
      },
      {
        "id": "15.2",
        "question": "What are the benefits of a Canary Deployment?",
        "answer": "The benefits of a Canary Deployment include minimal risk exposure, gradual updates, and the ability to monitor the impact of changes before they affect all users."
      },
      {
        "id": "16.1",
        "question": "What is a Rollback in the context of deployment?",
        "answer": "Rollback refers to reverting an application or system to a previous stable state in case of issues after a deployment, ensuring the system can continue functioning without downtime."
      },
      {
        "id": "16.2",
        "question": "What is a feature toggle in CI/CD?",
        "answer": "A feature toggle is a mechanism that allows developers to enable or disable features in a deployed application without requiring a new deployment, making feature testing and gradual releases easier."
      },
      {
        "id": "17.1",
        "question": "What is the difference between Continuous Integration and Continuous Deployment?",
        "answer": "Continuous Integration focuses on frequently merging code into a shared repository, running automated tests to ensure stability, while Continuous Deployment automatically deploys code to production after passing tests."
      },
      {
        "id": "18.1",
        "question": "What are some common CI/CD tools?",
        "answer": "Common CI/CD tools include Jenkins, CircleCI, GitLab CI, Travis CI, and Bamboo, which help automate testing, building, and deployment processes."
      },
      {
        "id": "19.1",
        "question": "What is a microservices architecture?",
        "answer": "A microservices architecture is a design pattern where an application is broken down into small, loosely coupled services that can be developed, deployed, and scaled independently."
      },
      {
        "id": "19.2",
        "question": "What are the benefits of a microservices architecture?",
        "answer": "Benefits include easier scaling, independent service updates, better fault isolation, and the ability to use different technologies for different services."
      },
      {
        "id": "20.1",
        "question": "What is a container in DevOps?",
        "answer": "A container is a lightweight, standalone, and executable software package that includes everything needed to run an application, ensuring it runs consistently across different environments."
      },
      {
        "id": "20.2",
        "question": "How do containers help in DevOps?",
        "answer": "Containers help by providing consistent and isolated environments, reducing dependency conflicts, simplifying deployments, and improving scalability across different environments."
      },
      {
        "id": "21.1",
        "question": "What is Docker?",
        "answer": "Docker is a platform that automates the process of building, testing, and deploying applications inside containers, ensuring consistency across different environments."
      },
      {
        "id": "21.2",
        "question": "What is Docker Compose?",
        "answer": "Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to configure your application's services in a YAML file and run them together."
      },
      {
        "id": "22.1",
        "question": "What is Kubernetes?",
        "answer": "Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications, typically used in microservices architectures."
      },
      {
        "id": "22.2",
        "question": "What are the key features of Kubernetes?",
        "answer": "Key features include automated scaling, load balancing, self-healing, deployment strategies (rolling updates), and orchestration of containerized applications."
      },
      {
        "id": "23.1",
        "question": "What is a Service Mesh?",
        "answer": "A Service Mesh is a dedicated infrastructure layer for managing service-to-service communications in a microservices architecture, providing features like load balancing, service discovery, and monitoring."
      },
      {
        "id": "23.2",
        "question": "How does a Service Mesh improve CI/CD processes?",
        "answer": "A Service Mesh improves CI/CD processes by providing reliable communication between microservices, enabling better monitoring, security, and traffic management, which can enhance deployment strategies."
      },
      {
        "id": "24.1",
        "question": "What is the main idea behind Continuous Integration (CI)?",
        "answer": "The main idea behind CI is to run jobs like tests or build scripts every time a commit is made to the repository, improving app quality and developer effectiveness."
      },
      {
        "id": "24.2",
        "question": "What is a GitLab CI pipeline?",
        "answer": "A GitLab CI pipeline is a sequence of jobs that are defined in the `.gitlab-ci.yml` file to automate tasks like testing, building, and deploying applications."
      },
      {
        "id": "25.1",
        "question": "How are jobs in a GitLab CI pipeline executed?",
        "answer": "Jobs in the same stage can run in parallel, and each job runs in its own container with its defined environment and script."
      },
      {
        "id": "25.2",
        "question": "What happens if a job in stage n fails in a GitLab CI pipeline?",
        "answer": "If a job in stage n fails, the jobs in stage n+1 will not run."
      },
      {
        "id": "26.1",
        "question": "What is the purpose of the `before_script` in a GitLab CI job?",
        "answer": "The `before_script` is used to define setup or prerequisite commands that run before the main script in the job."
      },
      {
        "id": "26.2",
        "question": "How does `before_script` differ from `script` in GitLab CI?",
        "answer": "While `script` defines the main commands to run, `before_script` is used for setup steps, and both are concatenated and run in the same shell."
      },
      {
        "id": "27.1",
        "question": "What are artifacts in GitLab CI?",
        "answer": "Artifacts are output files from jobs that can be uploaded and used in other stages or elsewhere in GitLab CI services, such as binaries or zip files."
      },
      {
        "id": "27.2",
        "question": "How can you prevent a GitLab CI job from downloading any artifacts?",
        "answer": "By setting the `dependencies` attribute to `[]`, you can prevent a job from downloading any artifacts from previous jobs."
      },
      {
        "id": "28.1",
        "question": "What is the purpose of the `default` section in a `.gitlab-ci.yml` file?",
        "answer": "The `default` section allows you to define common settings, like `before_script` and `image`, that should apply to all jobs in the pipeline."
      },
      {
        "id": "28.2",
        "question": "Can you override a setting defined in the `default` section of a `.gitlab-ci.yml` file?",
        "answer": "Yes, you can override a default setting within a specific job by redefining the setting under that job's configuration."
      },
      {
        "id": "29.1",
        "question": "What is the role of the `pages` job in GitLab CI?",
        "answer": "The `pages` job allows you to publish files on the web by copying them to a public directory, making them available via GitLab Pages."
      },
      {
        "id": "29.2",
        "question": "What is required to trigger GitLab Pages in a `.gitlab-ci.yml` file?",
        "answer": "The job must be named `pages` and should include a `script` that copies files to the `public/` directory and defines `artifacts` to publish those files."
      },
      {
        "id": "30.1",
        "question": "What is the significance of computing resources in GitLab CI?",
        "answer": "Jobs in GitLab CI consume compute resources (CI minutes), and it's important to manage them wisely to avoid running out of resources, especially when using an Education license."
      },
      {
        "id": "30.2",
        "question": "How can you optimize resource usage when running jobs in GitLab CI?",
        "answer": "You can optimize resource usage by running short commands in jobs, canceling unnecessary jobs, and being mindful of job frequency and duration."
      },
      {
        "id": "31.1",
        "question": "What are some other services similar to GitLab CI?",
        "answer": "Other services similar to GitLab CI include GitHub Actions, Circle CI, and Travis CI, which also provide automated CI/CD pipelines."
      },
      {
        "id": "32.1",
        "question": "What is the purpose of the `stages` keyword in a `.gitlab-ci.yml` file?",
        "answer": "The `stages` keyword defines the order of execution for jobs and groups jobs into stages, with jobs in the same stage running in parallel."
      },
      {
        "id": "32.2",
        "question": "Can you run multiple jobs in parallel within the same stage in GitLab CI?",
        "answer": "Yes, jobs within the same stage run in parallel, which allows multiple tasks (e.g., testing, linting) to be executed simultaneously."
      },
      {
        "id": "33.1",
        "question": "How does GitLab CI handle dependencies between jobs in different stages?",
        "answer": "Jobs in later stages can depend on the artifacts or results of jobs in earlier stages. A job in stage n+1 will not run until all jobs in stage n have successfully completed."
      },
      {
        "id": "33.2",
        "question": "What is the behavior of jobs when a pipeline is triggered in GitLab CI?",
        "answer": "When a pipeline is triggered, jobs are executed in the order defined by the stages. If a job fails, subsequent jobs in the pipeline may be skipped depending on the failure."
      },
      {
        "id": "34.1",
        "question": "How can you define a custom container image for a job in GitLab CI?",
        "answer": "You can define a custom container image for a job using the `image` keyword in the job definition, specifying the desired image and tag."
      },
      {
        "id": "34.2",
        "question": "What happens if you don't specify a container image in GitLab CI?",
        "answer": "If no container image is specified, GitLab CI uses the default image for the runner, which may vary depending on the runner's configuration."
      },
      {
        "id": "35.1",
        "question": "What does the `script` keyword do in GitLab CI jobs?",
        "answer": "The `script` keyword defines the commands to be executed during the job, such as running tests, building the app, or performing other tasks."
      },
      {
        "id": "35.2",
        "question": "Can you specify multiple commands in the `script` section of a GitLab CI job?",
        "answer": "Yes, you can specify multiple commands in the `script` section, and they will be executed sequentially in the order defined."
      },
      {
        "id": "36.1",
        "question": "What is the default behavior of jobs with respect to dependencies in GitLab CI?",
        "answer": "By default, a job downloads all artifacts from jobs in earlier stages, ensuring that it has access to any necessary dependencies from previous jobs."
      },
      {
        "id": "36.2",
        "question": "How can you configure a job in GitLab CI to download no artifacts from earlier jobs?",
        "answer": "You can set the `dependencies` keyword to `[]` to configure a job to download no artifacts from earlier jobs."
      },
      {
        "id": "37.1",
        "question": "What is the benefit of using GitLab CI with cloud-based runners?",
        "answer": "Cloud-based runners allow you to run jobs in isolated environments, enabling automation without requiring dedicated infrastructure and reducing the need for local resources."
      },
      {
        "id": "37.2",
        "question": "How do you ensure that a job in GitLab CI uses a specific version of a container image?",
        "answer": "To ensure a specific version is used, always specify a tag for the container image (e.g., `image: python:3.8`) rather than using the `latest` tag."
      },
      {
        "id": "38.1",
        "question": "What is the purpose of GitLab Pages in the context of CI/CD?",
        "answer": "GitLab Pages allows you to publish static websites directly from your repository by using GitLab CI to build and deploy the site."
      },
      {
        "id": "38.2",
        "question": "What is required in the `.gitlab-ci.yml` file to deploy a website using GitLab Pages?",
        "answer": "To deploy a website with GitLab Pages, you need a job named `pages` in the `deploy` stage that copies the website files to the `public/` directory and includes the `artifacts` section."
      },
      {
        "id": "39.1",
        "question": "What should you keep in mind when using GitLab CI with an Education license?",
        "answer": "With an Education license, you have a limited number of CI minutes. It's important to manage job duration and frequency to avoid running out of resources."
      },
      {
        "id": "39.2",
        "question": "What should you do if you no longer need a GitLab CI job to run?",
        "answer": "If you no longer need a job to run, you can cancel it to save resources and prevent unnecessary compute time consumption."
      },
      {
        "id": "40.1",
        "question": "What happens if a job in a GitLab CI pipeline fails?",
        "answer": "If a job fails, subsequent jobs in later stages will not run unless specified otherwise. This ensures that jobs that depend on the success of earlier jobs do not execute with faulty data."
      },
      {
        "id": "40.2",
        "question": "How can you ensure that a job in GitLab CI doesn't run if a previous job fails?",
        "answer": "By default, jobs in GitLab CI are dependent on the success of the jobs before them in the pipeline. If a job fails, later jobs will not run unless overridden using the `allow_failure` keyword."
      },
      {
        "id": "41.1",
        "question": "What is the purpose of the `before_script` section in a GitLab CI job?",
        "answer": "The `before_script` section is used to define commands that should run before the main job's `script`. This is typically used for setup or prerequisite tasks."
      },
      {
        "id": "41.2",
        "question": "How does the `before_script` differ from the `script` in GitLab CI?",
        "answer": "The `before_script` defines commands to prepare the environment or set up prerequisites, while the `script` contains the main actions or tasks that the job will perform. Both sections run in the same shell."
      },
      {
        "id": "42.1",
        "question": "What is the purpose of defining a `default` section in a `.gitlab-ci.yml` file?",
        "answer": "The `default` section allows you to set common settings or configurations for all jobs in the pipeline, such as the `before_script` and `image`, which can be overridden by specific jobs if needed."
      },
      {
        "id": "42.2",
        "question": "Can you override the `before_script` in individual GitLab CI jobs?",
        "answer": "Yes, you can override the `before_script` for individual jobs by specifying a custom `before_script` section in the job definition."
      },
      {
        "id": "43.1",
        "question": "How can you manage shared configuration between different jobs in GitLab CI?",
        "answer": "You can manage shared configuration by using the `default` section to define common values (e.g., `before_script`, `image`), which will be applied to all jobs unless overridden."
      },
      {
        "id": "43.2",
        "question": "What would happen if you define a `before_script` in the `default` section but override it in a job in GitLab CI?",
        "answer": "The job will use the overridden `before_script` instead of the default one defined in the `default` section."
      },
      {
        "id": "44.1",
        "question": "What is an artifact in GitLab CI?",
        "answer": "An artifact is a file or set of files that are generated by a job and stored for later use, such as being passed to other jobs in the pipeline or used for deployment."
      },
      {
        "id": "44.2",
        "question": "How can you specify which files should be saved as artifacts in GitLab CI?",
        "answer": "You can specify the files to be saved as artifacts by using the `artifacts` section and listing the paths to the files or directories you want to store."
      },
      {
        "id": "45.1",
        "question": "What is the function of the `pages` job in GitLab CI?",
        "answer": "The `pages` job is used to publish a website by copying the necessary files to the `public/` directory and configuring the pipeline to deploy it using GitLab Pages."
      },
      {
        "id": "45.2",
        "question": "What is the significance of the `artifacts` section in the `pages` job?",
        "answer": "The `artifacts` section in the `pages` job specifies the files (usually in the `public/` directory) that need to be preserved and deployed to GitLab Pages."
      },
      {
        "id": "46.1",
        "question": "What does the `image` keyword in a `.gitlab-ci.yml` file specify?",
        "answer": "The `image` keyword specifies the container image to be used for the job, which determines the environment the job will run in."
      },
      {
        "id": "46.2",
        "question": "Why is it important to avoid using the `latest` tag for container images in GitLab CI?",
        "answer": "Using the `latest` tag can lead to unpredictability because it pulls the most recent version of the image, which may introduce breaking changes. It's better to use a specific version or tag for consistency."
      },
      {
        "id": "47.1",
        "question": "How does GitLab CI ensure that jobs are executed in the correct order?",
        "answer": "GitLab CI ensures the correct order of job execution using stages, with jobs in the same stage running in parallel and jobs in later stages depending on the success of earlier ones."
      },
      {
        "id": "47.2",
        "question": "What happens if you try to run a job in GitLab CI without specifying a `stage`?",
        "answer": "If no `stage` is specified, the job will be assigned to the `test` stage by default, unless otherwise configured in the pipeline."
      },
      {
        "question": "What is the difference between a container and a virtual machine (VM)?",
        "answer": "A container is an isolated group of processes running on a container engine and does not contain a full operating system. A VM includes a full operating system and virtualizes hardware resources."
      },
      {
        "question": "What does the docker build -t myApp . command do?",
        "answer": "It builds a Docker image with the tag 'myApp' using the current directory as the build context."
      },
      {
        "question": "What are the possible states of a container?",
        "answer": "Created, Running, Paused, Exited, Restarting, Deleted."
      },
      {
        "question": "What is the relationship between a container and a container image?",
        "answer": "A container is a running instance of a container image. Multiple containers can be based on the same image, but each container has its own data state."
      },
      {
        "question": "What is the difference between RUN and CMD in a Dockerfile?",
        "answer": "RUN executes commands during the image build process, while CMD defines the default command to run when the container starts."
      },
      {
        "question": "How is Docker Engine different from Docker Desktop?",
        "answer": "Docker Desktop is used for local development environments and includes extra features, while Docker Engine is used for command-line operations and is the focus in this course."
      },
      {
        "question": "What does the docker run -it myApp command do?",
        "answer": "It runs a container interactively with an attached terminal, using the 'myApp' image."
      },
      {
        "question": "What is the purpose of docker run -d -p 3000:3000 express-app?",
        "answer": "It runs the container in detached mode (-d) and publishes port 3000 of the container to port 3000 on the host."
      },
      {
        "question": "What is Docker Compose used for?",
        "answer": "Docker Compose is used to define and manage multi-container Docker applications, typically through a docker-compose.yml file."
      },
      {
        "question": "What is the purpose of the COPY command in a Dockerfile?",
        "answer": "The COPY command copies files or directories from the host machine into the container’s filesystem."
      },
      {
        "question": "What does the docker ps command show?",
        "answer": "The docker ps command shows the currently running containers, including their IDs, names, status, and other details."
      },
      {
        "question": "What is the purpose of a Dockerfile?",
        "answer": "A Dockerfile is a script that contains instructions on how to build a Docker image, including the base image, dependencies, and commands to run."
      },
      {
        "question": "What is the purpose of the -p flag in docker run?",
        "answer": "The -p flag in docker run is used to publish a container’s port to a specific port on the host machine, allowing access to services inside the container."
      },
      {
        "question": "What is the difference between a container image and a container?",
        "answer": "A container image is a blueprint for creating containers, while a container is a running instance of an image, with its own filesystem and state."
      },
      {
        "question": "What is the difference between COPY and RUN in a Dockerfile?",
        "answer": "COPY copies files or directories from the host machine to the container, while RUN executes commands within the container during the image build process."
      },
      {
        "question": "What is a container runtime?",
        "answer": "A container runtime is the software responsible for running containers on a host system, such as Docker or containerd."
      },
      {
        "question": "What is the role of a container engine?",
        "answer": "A container engine is responsible for creating, running, and managing containers on a host system. Docker is one of the most widely used container engines."
      },
      {
        "question": "How does docker init help in containerizing projects?",
        "answer": "docker init automatically generates a Dockerfile and docker-compose.yml file based on the project structure, making it easier to start containerizing applications."
      },
      {
        "question": "What is the purpose of the docker build command?",
        "answer": "The docker build command is used to create a Docker image from a Dockerfile, using the specified build context and tags."
      },
      {
        "question": "What does the -d flag do in the docker run command?",
        "answer": "The -d flag in docker run runs the container in detached mode, meaning the container runs in the background."
      },
      {
        "question": "What are some common container states?",
        "answer": "Some common container states include created, running, paused, exited, and restarting."
      },
      {
        "question": "What is the significance of a Docker image?",
        "answer": "A Docker image is a snapshot of a container’s filesystem and configuration, which serves as the basis for running containers."
      },
      {
        "question": "What is the difference between Docker Desktop and Docker Engine?",
        "answer": "Docker Desktop is a graphical interface for managing Docker containers on local development machines, while Docker Engine is the core component that runs containers on a server or VM using command-line tools."
      },
      {
        "question": "What is the function of the docker stop command?",
        "answer": "The docker stop command is used to stop a running container by sending a termination signal to the container."
      },
      {
        "question": "What does the docker images command show?",
        "answer": "The docker images command lists all the images that are available on the local system, along with their sizes and tags."
      },
      {
        "question": "What does it mean for containers to be isolated?",
        "answer": "Container isolation means that each container runs in its own environment with its own filesystem, network, and process space, separate from other containers and the host system."
      },
      {
        "question": "What are some advantages of using containers over virtual machines?",
        "answer": "Containers are more lightweight, faster to start, and share the host's operating system kernel, unlike virtual machines, which run full operating systems and require more resources."
      },
      {
        "question": "How can containers help with reproducible environments?",
        "answer": "Containers ensure consistent environments across different systems by encapsulating the application and its dependencies, eliminating the issues caused by differences in configurations between environments."
      },
      {
        "question": "What is the purpose of GitLab CI/CD for Django on Render?",
        "answer": "GitLab CI/CD automates the deployment process, ensuring that the Django application is deployed to Render only if all Continuous Integration (CI) checks pass. This results in an automatic update to the production site without human intervention."
      },
      {
        "question": "What is continuous deployment?",
        "answer": "Continuous deployment automatically updates the production site when all CI checks pass, reducing human intervention and providing faster feedback loops for developers to address any issues found."
      },
      {
        "question": "What is the benefit of a shorter feedback loop in CI/CD?",
        "answer": "A shorter feedback loop helps developers fix issues in their code more quickly by deploying within a few days of writing it, making it easier to address bugs without context switching or losing track of the problem."
      },
      {
        "question": "What are the different run-time environments used in A1 pipeline development?",
        "answer": "The different run-time environments include the dev machine (e.g., Windows), CI job (Debian-based container with Python 3.12), and Render build job (different Linux container)."
      },
      {
        "question": "What are the main service models of cloud computing?",
        "answer": "The main service models of cloud computing are Infrastructure as a Service (IaaS), Containers as a Service (CaaS), Platform as a Service (PaaS), Function as a Service (FaaS), and Software as a Service (SaaS)."
      },
      {
        "question": "What is the difference between cloud computing and cloud storage?",
        "answer": "Cloud computing involves using remote servers to run applications or store data, while cloud storage specifically refers to storing files on remote servers. For example, Dropbox provides cloud storage."
      },
      {
        "question": "What are the characteristics of cloud-native applications?",
        "answer": "Cloud-native applications are designed to take advantage of cloud computing's scalability and elasticity. They often feature loosely-coupled microservices, containerization, and continuous deployment."
      },
      {
        "question": "What are the advantages of cloud-native architecture over traditional monolithic architecture?",
        "answer": "Cloud-native architecture allows for greater flexibility, easier scaling, and faster deployments by using independent microservices, whereas monolithic architecture involves interconnected components within a single codebase, making it more difficult to scale."
      },
      {
        "question": "What are the benefits of cloud services for small teams or individual developers compared to older web hosting models?",
        "answer": "Cloud services provide flexibility, scalability, and cost-effectiveness, allowing small teams or individual developers to access powerful infrastructure without the need to manage physical servers or maintain expensive web hosting services."
      },
      {
        "question": "What is the difference between managed and unmanaged databases in cloud services?",
        "answer": "Managed databases are fully managed by the cloud provider, including updates and maintenance (e.g., MongoDB Atlas), while unmanaged databases require the user to handle installation, maintenance, and other aspects of database management."
      },
      {
        "question": "What is the role of containers in cloud-native applications?",
        "answer": "Containers in cloud-native applications provide a lightweight, consistent environment for deployment across various platforms. They allow developers to package and deploy applications more efficiently, scaling easily with demand."
      },
      {
        "question": "What does serverless computing mean in the context of cloud services?",
        "answer": "Serverless computing allows developers to run code without managing the underlying server infrastructure. The cloud provider automatically handles resource allocation, scaling, and execution of the code."
      },
      {
        "question": "What is the difference between monolithic and microservices architectures?",
        "answer": "Monolithic architecture involves tightly integrated components within a single codebase, while microservices architecture breaks down the application into loosely coupled, independently deployable services."
      },
      {
        "question": "What are some of the key benefits of using a cloud provider like AWS or Azure for deploying applications?",
        "answer": "Cloud providers offer scalable infrastructure, easy deployment, automated resource management, and cost-effective solutions, helping businesses to efficiently scale applications based on demand."
      },
      {
        "question": "What cloud service model would be appropriate for a mobile app connecting to maps and databases?",
        "answer": "Platform as a Service (PaaS) could be a good choice for developing and deploying a mobile app, as it provides a managed environment with scalable back-end services for app development."
      },
      {
        "question": "What cloud service is best for storing large data like role-playing game recordings?",
        "answer": "Cloud Storage services, such as AWS S3 or Azure Blob Storage, are ideal for storing large files like game recordings due to their scalability and cost-effectiveness for handling large volumes of data."
      },
      {
        "question": "What is a major advantage of cloud-native applications in terms of deployment?",
        "answer": "Cloud-native applications benefit from continuous deployment and automation, enabling frequent updates and faster scaling of specific components without downtime."
      },
      {
        "question": "How does scaling in cloud environments differ from traditional on-premises infrastructure?",
        "answer": "Cloud environments offer elastic scaling, where resources can be easily added or removed based on demand, while on-premises infrastructure typically requires manual provisioning and maintenance of physical hardware."
      },
      {
        "question": "What is a potential drawback of microservices architecture?",
        "answer": "Microservices architecture can introduce complexity in managing multiple services, communication between them, and ensuring consistent deployment across distributed systems."
      },
      {
        "question": "What is GitLab CI/CD's role in testing a Django application before deployment?",
        "answer": "GitLab CI/CD helps automate the testing of a Django application by running tests on each commit. This ensures that the application is functional before being deployed to the production environment."
      },
      {
        "question": "What is Continuous Integration (CI) in software development?",
        "answer": "Continuous Integration involves automatically merging code changes from multiple contributors into a shared repository, followed by running tests to detect issues early in the development process."
      },
      {
        "question": "What is Continuous Testing in a CI/CD pipeline?",
        "answer": "Continuous Testing is the automated process of running tests at every stage of the CI/CD pipeline to detect issues quickly and ensure code quality."
      },
      {
        "question": "What is the benefit of using a debian-based container for CI jobs?",
        "answer": "Using a Debian-based container ensures consistency across different environments and simplifies the setup of dependencies, as the container provides a stable environment for running jobs."
      },
      {
        "question": "What is the role of a Dockerfile in a CI/CD pipeline?",
        "answer": "A Dockerfile defines the instructions for building a Docker image, including setting up dependencies and environment variables. It allows for consistent containerized builds across different systems."
      },
      {
        "question": "What is the importance of creating reproducible environments using Docker?",
        "answer": "Reproducible environments ensure that the application runs consistently across different systems, reducing issues that arise from discrepancies between local development, staging, and production environments."
      },
      {
        "question": "How does Docker help in deploying microservices applications?",
        "answer": "Docker helps deploy microservices by packaging each service in a separate container. This makes it easier to scale, update, and manage each service independently."
      },
      {
        "question": "What is the difference between IaaS and PaaS?",
        "answer": "IaaS (Infrastructure as a Service) provides virtualized computing resources like storage and networking, while PaaS (Platform as a Service) offers a platform that includes tools and frameworks to build and deploy applications without managing the underlying infrastructure."
      },
      {
        "question": "How can cloud services provide auto-scaling for applications?",
        "answer": "Cloud services offer auto-scaling by automatically adjusting resources like CPU, memory, and storage based on real-time demand, ensuring that applications can handle traffic spikes without manual intervention."
      },
      {
        "question": "What is the significance of the term 'serverless' in cloud computing?",
        "answer": "In serverless computing, developers write functions that are executed in response to events, while the cloud provider manages the infrastructure and scaling. The user only pays for the compute resources used during function execution."
      },
      {
        "question": "What are the primary differences between AWS, Google Cloud, and Azure?",
        "answer": "AWS, Google Cloud, and Azure are major cloud providers with varying strengths. AWS is known for its wide range of services and global reach, Google Cloud excels in data analytics and machine learning, and Azure is a top choice for Microsoft-based environments and enterprise integration."
      },
      {
        "question": "What is a hybrid cloud deployment model?",
        "answer": "A hybrid cloud deployment model combines on-premises infrastructure with private and public cloud services, allowing businesses to move workloads between different environments based on needs."
      },
      {
        "question": "What is the advantage of using cloud services for scaling applications?",
        "answer": "Cloud services provide elasticity, allowing applications to scale automatically based on demand, which results in cost efficiency and the ability to handle traffic spikes without over-provisioning resources."
      },
      {
        "question": "How do containers support microservices architectures?",
        "answer": "Containers enable microservices architectures by providing isolated, lightweight environments for each service, allowing them to run independently and be easily managed, deployed, and scaled."
      },
      {
        "question": "What are the key benefits of containerization in cloud-native applications?",
        "answer": "Containerization provides portability, consistency, isolation, and scalability for cloud-native applications, enabling faster development cycles and better resource utilization."
      },
      {
        "question": "What is the role of the cloud service provider in maintaining the underlying infrastructure of a cloud-native application?",
        "answer": "The cloud service provider manages the underlying infrastructure, such as hardware, networking, and storage, allowing developers to focus on building and deploying applications without worrying about maintaining physical resources."
      },
      {
        "question": "What is the concept of 'Infrastructure as Code' (IaC)?",
        "answer": "Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable configuration files, enabling automation and consistency across deployments."
      },
      {
        "question": "What are the key advantages of using cloud-native development over traditional development?",
        "answer": "Cloud-native development offers scalability, flexibility, faster deployments, and easier maintenance by leveraging microservices, containers, and cloud-native tools, making it easier to handle complex workloads."
      },
      {
        "question": "What is the role of a Continuous Deployment (CD) pipeline in software delivery?",
        "answer": "A Continuous Deployment (CD) pipeline automates the release of code to production, ensuring that new changes are deployed to users as soon as they pass all tests, enabling faster feedback and continuous improvement."
      },
      {
        "question": "What is a Kubernetes cluster, and how does it help in container orchestration?",
        "answer": "A Kubernetes cluster is a set of nodes that run containerized applications. It helps with container orchestration by automating deployment, scaling, and managing containerized applications across multiple machines."
      },
      {
        "question": "What is the difference between Docker containers and virtual machines?",
        "answer": "Docker containers are lightweight and share the host operating system's kernel, while virtual machines are heavier, running their own OS with an additional overhead. Containers are faster and more resource-efficient than VMs."
      },
      {
        "question": "What is a CI/CD pipeline, and why is it important in modern software development?",
        "answer": "A CI/CD pipeline is an automated workflow that involves continuous integration and continuous deployment, helping developers to merge code, run tests, and deploy applications more efficiently and frequently, ensuring faster delivery of features and bug fixes."
      },
      {
        "question": "What does the term 'immutable infrastructure' mean in the context of cloud deployment?",
        "answer": "Immutable infrastructure refers to the practice of treating infrastructure as unchangeable. When an update is needed, new instances are created rather than modifying existing ones, ensuring consistency and reliability across environments."
      },
      {
        "question": "How does load balancing work in cloud computing?",
        "answer": "Load balancing distributes incoming traffic across multiple servers or instances to ensure no single server is overwhelmed, improving the performance and reliability of applications, especially during high traffic periods."
      },
      {
        "question": "What is the significance of using a Version Control System (VCS) like Git in CI/CD pipelines?",
        "answer": "A Version Control System (VCS) like Git helps track changes to code, allowing teams to collaborate, roll back changes, and ensure consistency in the codebase. It integrates with CI/CD pipelines to automate builds and tests based on code changes."
      },
      {
        "question": "What is the concept of 'microservices architecture'?",
        "answer": "Microservices architecture is a design approach where an application is broken down into smaller, independent services, each handling a specific task and communicating over APIs. This enables easier scaling, maintenance, and deployment."
      },
      {
        "question": "What is the purpose of using environment variables in a Docker container?",
        "answer": "Environment variables are used in Docker containers to configure settings such as database connections, API keys, and other environment-specific information without hardcoding values into the application code."
      },
      {
        "question": "What is the role of a Docker Compose file in multi-container applications?",
        "answer": "A Docker Compose file defines and runs multi-container Docker applications. It specifies the services, networks, and volumes required by the application, making it easier to manage and deploy containerized environments."
      },
      {
        "question": "What are the benefits of using AWS Lambda for serverless computing?",
        "answer": "AWS Lambda allows developers to run code without provisioning servers, automatically scaling based on demand and only charging for execution time. It simplifies serverless application development and reduces operational overhead."
      },
      {
        "question": "What is the function of an API Gateway in microservices architecture?",
        "answer": "An API Gateway acts as a single entry point for all microservices, routing requests to the appropriate services, handling authentication, rate limiting, and other cross-cutting concerns, improving performance and security."
      },
      {
        "question": "What is the difference between horizontal and vertical scaling?",
        "answer": "Horizontal scaling involves adding more instances or servers to distribute the load, while vertical scaling involves adding more resources (CPU, memory) to an existing server to handle increased demand."
      },
      {
        "question": "What is the role of a container registry, like Docker Hub?",
        "answer": "A container registry, like Docker Hub, is a centralized repository for storing and sharing container images. It enables easy access to pre-built images and the ability to store custom images for use in various environments."
      },
      {
        "question": "What is the purpose of using GitLab CI/CD for containerized applications?",
        "answer": "GitLab CI/CD automates the process of building, testing, and deploying containerized applications. It ensures consistency, reduces manual work, and allows for faster delivery and easier rollback of containerized services."
      },
      {
        "question": "What is a blue/green deployment strategy in CI/CD pipelines?",
        "answer": "A blue/green deployment strategy involves running two production environments: 'blue' for the current version and 'green' for the new version. Traffic is switched to 'green' once the new version is validated, minimizing downtime and risk."
      },
      {
        "question": "What is the significance of monitoring and logging in cloud-based applications?",
        "answer": "Monitoring and logging are crucial for understanding the health and performance of cloud-based applications. They help identify issues, improve troubleshooting, optimize performance, and ensure the application's reliability in production."
      },
      {
        "question": "What is an ELT process, and how does it differ from ETL?",
        "answer": "ELT (Extract, Load, Transform) is a process where data is first extracted and loaded into a data warehouse, then transformed. In ETL (Extract, Transform, Load), data is transformed before being loaded. ELT is typically used for cloud-based data processing due to its scalability."
      },
      {
        "question": "What is an API rate limiter, and why is it important?",
        "answer": "An API rate limiter restricts the number of requests a user can make to an API in a given time frame. It helps prevent abuse, protects the server from overload, and ensures fair usage of the API."
      },
      {
        "question": "What is the purpose of multi-stage builds in Docker?",
        "answer": "Multi-stage builds allow you to use intermediate images to compile and build an application, then copy the necessary files to the final image, resulting in a smaller final image without unnecessary build tools."
      },
      {
        "question": "What does the command `docker run -d -p 27017:27017 -e USERNAME=username -e PASSWORD=password --name mongodb --net mongo-network mongo` do?",
        "answer": "This command runs a MongoDB container in detached mode with specific port mapping, environment variables for authentication, a custom container name, and a network configuration."
      },
      {
        "question": "What role does `mongo-network` play in Docker containers?",
        "answer": "`mongo-network` allows the containers to communicate with each other in the same network, making them part of a virtual network isolated from other containers."
      },
      {
        "question": "What happens when you run `docker build --no-cache`?",
        "answer": "The `--no-cache` option forces Docker to rebuild all layers from scratch, avoiding any cached layers from previous builds."
      },
      {
        "question": "Why should you avoid caching the `apt update` and `apt install` commands in Dockerfiles?",
        "answer": "Caching these commands may prevent the installation of the latest versions of packages. Combining them into one `RUN` command ensures that the latest packages are always installed."
      },
      {
        "question": "What is the purpose of `docker build --target build_step -t stage0 .`?",
        "answer": "This command builds an intermediate image from a specific build step defined in the Dockerfile, useful for debugging or stopping the build process at a certain point."
      },
      {
        "question": "What is the difference between a container's read-write layer and a multi-stage build?",
        "answer": "The read-write layer is temporary and changes with each container run, while multi-stage builds use intermediate images and only include necessary files in the final image, reducing size."
      },
      {
        "question": "What command is used to inspect a running container in Docker?",
        "answer": "`docker inspect <container_name>` provides detailed information about the container, such as its configuration, environment variables, and running status."
      },
      {
        "question": "What does the `docker exec` command do?",
        "answer": "`docker exec` allows you to execute commands inside a running container, including starting an interactive shell session to inspect or troubleshoot the container."
      },
      {
        "question": "What is the significance of PID 1 in a Docker container?",
        "answer": "PID 1 is the first process in a container and is responsible for handling signals like SIGINT or SIGTERM. Unlike regular processes, it does not terminate automatically on receiving these signals, and the process inside the container must handle them."
      },
      {
        "question": "What is the purpose of the `--entrypoint` flag in Docker?",
        "answer": "The `--entrypoint` flag overrides the default entrypoint of a container, allowing you to run a different command, such as starting a shell for debugging purposes."
      },
      {
        "question": "What does `docker system prune` do?",
        "answer": "`docker system prune` removes unused data, including stopped containers, unused networks, dangling images, and build caches, helping to free up disk space."
      },
      {
        "question": "What is the role of the `logs` command in Docker debugging?",
        "answer": "The `docker logs` command is used to view the output (stdout and stderr) of a running or stopped container, useful for debugging containers that are crashing or behaving unexpectedly."
      },
      {
        "question": "How can you use `docker top` for debugging?",
        "answer": "`docker top` shows the processes running inside a container, including PID and other resource information, allowing you to monitor and debug the container's state."
      },
      {
        "question": "How does using bind mounts help with debugging in Docker?",
        "answer": "Bind mounts allow you to mount local directories to containers, making it easier to access and modify logs or configuration files directly from the host system."
      },
      {
        "question": "What is the purpose of `docker attach`?",
        "answer": "`docker attach` allows you to attach to a running container to watch its output in real time. This is particularly useful for interactive debugging of containers running in detached mode."
      },
      {
        "question": "What is the difference between a normal process and PID 1 in a container?",
        "answer": "A normal process terminates when it receives signals like SIGINT or SIGTERM, but PID 1, being the init process in the container, does not terminate automatically on these signals and must handle them explicitly."
      },
      {
        "question": "Why is cleaning up images and containers periodically important in Docker?",
        "answer": "Cleaning up unused images and containers helps to free up system resources and avoid potential conflicts or clutter caused by unnecessary Docker objects."
      },
      {
        "question": "What is the purpose of Docker volumes?",
        "answer": "Docker volumes are used to persist data generated by and used by Docker containers. They are independent of the container's lifecycle and can be shared across containers."
      },
      {
        "question": "How do you build a Docker image from a Dockerfile?",
        "answer": "You can build a Docker image using the `docker build` command followed by the path to the Dockerfile, e.g., `docker build -t my-image .`"
      },
      {
        "question": "What is a Dockerfile?",
        "answer": "A Dockerfile is a script containing instructions to create a Docker image. It includes steps like setting the base image, copying files, and running commands inside the container."
      },
      {
        "question": "What does the `EXPOSE` instruction do in a Dockerfile?",
        "answer": "The `EXPOSE` instruction tells Docker that the container will listen on the specified network ports at runtime. This is for documentation purposes and does not automatically publish the port."
      },
      {
        "question": "What is the significance of `docker-compose.yml`?",
        "answer": "The `docker-compose.yml` file defines services, networks, and volumes for Docker containers, allowing you to manage multi-container applications with a single configuration."
      },
      {
        "question": "How do you stop all running containers in Docker?",
        "answer": "You can stop all running containers with the command `docker stop $(docker ps -q)`, which stops containers based on their container IDs."
      },
      {
        "question": "What is a container registry in Docker?",
        "answer": "A container registry is a storage system for Docker images, where users can store and retrieve images. Examples include Docker Hub, Google Container Registry, and AWS Elastic Container Registry."
      },
      {
        "question": "What does the `docker ps` command do?",
        "answer": "`docker ps` lists all the currently running containers, showing details such as container ID, names, status, and port mappings."
      },
      {
        "question": "What is the purpose of the `docker network` command?",
        "answer": "The `docker network` command is used to manage Docker networks, which provide communication between containers. It allows you to create, inspect, and connect containers to networks."
      },
      {
        "question": "What does the `docker run` command do?",
        "answer": "`docker run` is used to create and start a new container from an image. It can also take additional options like port mappings, environment variables, and commands to run inside the container."
      },
      {
        "question": "What is the difference between `docker exec` and `docker attach`?",
        "answer": "`docker exec` runs a command in a running container, while `docker attach` attaches to the container's main process, allowing you to interact with it."
      },
      {
        "question": "What are the benefits of using Docker for development?",
        "answer": "Docker allows developers to create isolated environments, ensuring consistent application behavior across different machines and simplifying dependency management."
      },
      {
        "question": "What is the `docker pull` command used for?",
        "answer": "`docker pull` is used to download Docker images from a registry, such as Docker Hub, to your local machine."
      },
      {
        "question": "What is a multi-stage Docker build?",
        "answer": "A multi-stage Docker build allows you to use different images at different stages of the build process. This helps keep the final image small by separating build dependencies from runtime dependencies."
      },
      {
        "question": "What does the `docker tag` command do?",
        "answer": "`docker tag` is used to give an existing Docker image a new tag, allowing you to reference the image with a different name or version."
      },
      {
        "question": "What is the `docker push` command used for?",
        "answer": "`docker push` uploads a local Docker image to a container registry, making it available for others to pull and use."
      },
      {
        "question": "What is the `docker build` command used for?",
        "answer": "`docker build` is used to build a Docker image from a Dockerfile, which includes instructions on how to configure and create the image."
      },
      {
        "question": "How do you view logs from a Docker container?",
        "answer": "You can view logs from a running container using the `docker logs <container_name>` command."
      },
      {
        "question": "What is a Docker container?",
        "answer": "A Docker container is a lightweight, stand-alone, executable package that contains everything needed to run a piece of software, including the code, runtime, libraries, and system tools."
      },
      {
        "question": "What does the `docker volume` command do?",
        "answer": "`docker volume` is used to manage Docker volumes, which store persistent data for containers and can be shared across multiple containers."
      },
      {
        "question": "What is Docker Compose?",
        "answer": "Docker Compose is a tool that allows you to define and manage multi-container applications with a single YAML file, making it easier to configure, manage, and scale services."
      },
      {
        "question": "What does the `docker rm` command do?",
        "answer": "`docker rm` is used to remove one or more containers that are not currently running."
      },
      {
        "question": "What is the `docker stats` command?",
        "answer": "`docker stats` provides real-time statistics on container performance, such as CPU usage, memory usage, network IO, and disk IO."
      },
      {
        "question": "What is the difference between `docker pull` and `docker build`?",
        "answer": "`docker pull` downloads an image from a registry, while `docker build` creates an image from a Dockerfile and its associated context."
      },
      {
        "question": "What is Docker Swarm?",
        "answer": "Docker Swarm is a clustering and orchestration tool for Docker containers that enables you to manage a group of Docker engines as a single virtual system."
      },
      {
        "question": "What is the difference between a Docker container and a virtual machine?",
        "answer": "A Docker container is a lightweight, isolated environment that shares the host operating system's kernel, while a virtual machine runs its own operating system on top of a hypervisor."
      },
      {
        "question": "What is a Docker image?",
        "answer": "A Docker image is a snapshot of a container’s file system and configuration, including all necessary dependencies, to run an application."
      },
      {
        "question": "What is the purpose of the `docker build -t <name>` flag?",
        "answer": "The `-t` flag is used to tag an image during the build process, giving it a name or version, e.g., `docker build -t my-app:1.0 .`."
      },
      {
        "question": "What does the `docker stop` command do?",
        "answer": "`docker stop` stops a running container, allowing it to gracefully shut down."
      },
      {
        "question": "What is the purpose of a Docker network?",
        "answer": "Docker networks enable containers to communicate with each other and the outside world. You can define custom networks to control how containers interact."
      },
      {
        "question": "What is Docker Hub?",
        "answer": "Docker Hub is a cloud-based registry where users can find, store, and share Docker images. It is the default registry for Docker images."
      },
      {
        "question": "What does the `docker exec -it <container_name> bash` command do?",
        "answer": "`docker exec -it <container_name> bash` opens an interactive terminal inside the specified container, allowing you to execute commands within it."
      },
      {
        "question": "What does the `docker pull <image_name>` command do?",
        "answer": "`docker pull` downloads the specified Docker image from a registry to your local machine, so you can run it as a container."
      },
      {
        "question": "What is a Docker image layer?",
        "answer": "Each instruction in a Dockerfile creates a new layer in the image, which allows Docker to cache layers to speed up builds and reduce the size of images."
      },
      {
        "question": "What does the `docker ps -a` command do?",
        "answer": "`docker ps -a` lists all containers, including both running and stopped ones."
      },
      {
        "question": "How can you list all available Docker images on your machine?",
        "answer": "You can list all available Docker images with the command `docker images`."
      },
      {
        "question": "What is a Dockerfile?",
        "answer": "A Dockerfile is a text document that contains all the commands to assemble an image. It defines the base image, environment variables, dependencies, and the commands to execute inside the container."
      },
      {
        "question": "What does the `docker login` command do?",
        "answer": "`docker login` authenticates your Docker client with a registry (like Docker Hub), allowing you to push and pull images."
      },
      {
        "question": "What is Docker's 'Copy-on-Write' filesystem?",
        "answer": "Docker uses a 'Copy-on-Write' filesystem, which allows multiple containers to share the same image layers while making modifications to a copy of those layers. This saves disk space and speeds up operations."
      },
      {
        "question": "What is the purpose of `docker run`?",
        "answer": "`docker run` is used to create and start a new container from an image. It can also be used to specify container options like port mappings, environment variables, and volumes."
      },
      {
        "question": "What does the `docker exec` command do?",
        "answer": "`docker exec` is used to run commands in an already running container. It allows you to interact with the container without stopping it."
      },
      {
        "question": "What is the difference between `docker run` and `docker start`?",
        "answer": "`docker run` creates and starts a container, whereas `docker start` only starts an already created container that is in a stopped state."
      },
      {
        "question": "What does the `docker pull` command do?",
        "answer": "`docker pull` is used to download an image from a Docker registry to your local machine."
      },
      {
        "question": "What is a Docker registry?",
        "answer": "A Docker registry is a repository for storing and distributing Docker images. The most commonly used registry is Docker Hub, but you can also use private registries."
      },
      {
        "question": "What is the purpose of the `docker inspect` command?",
        "answer": "`docker inspect` provides detailed information about containers or images in JSON format, such as container configurations, network settings, and volumes."
      },
      {
        "question": "What is Docker's default network driver?",
        "answer": "The default network driver in Docker is the 'bridge' network, which creates a private internal network on your host system."
      },
      {
        "question": "What is the purpose of Docker Swarm?",
        "answer": "Docker Swarm is Docker's native clustering and orchestration tool that allows you to manage multiple Docker hosts and containers as a single virtual system."
      },
      {
        "question": "What is a multi-stage Docker build?",
        "answer": "A multi-stage build allows you to use multiple `FROM` statements in a single Dockerfile to create smaller, more efficient images by copying only the necessary artifacts between stages."
      },
      {
        "question": "What is the purpose of the `docker network` command?",
        "answer": "`docker network` is used to manage Docker networks. You can create, list, or remove custom networks for containers to communicate within and outside of Docker."
      },
      {
        "question": "What is the purpose of `docker volume`?",
        "answer": "`docker volume` is used to manage persistent storage for Docker containers. Volumes are stored outside the container filesystem and can be shared among containers."
      },
      {
        "question": "What is the difference between 'docker run' and 'docker create'?",
        "answer": "`docker create` creates a new container from an image without starting it, while `docker run` both creates and starts the container."
      },
      {
        "question": "What is a Docker Compose file?",
        "answer": "A Docker Compose file (`docker-compose.yml`) is used to define multi-container Docker applications, where each service is defined in a YAML configuration file."
      },
      {
        "question": "What is Docker's 'host' network mode?",
        "answer": "In Docker's 'host' network mode, containers share the host machine's network stack, allowing the container to directly access the host's network interfaces."
      }
  ]
  