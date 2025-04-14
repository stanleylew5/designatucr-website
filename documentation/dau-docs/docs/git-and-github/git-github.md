---
sidebar_label: "Git And Github"
sidebar_position: 1
---

# Git and Github

This guide covers how to get started with Git and using GitHub to manage our workflow and project development. Both are crucial to software development because they streamline our work and allow us to collaborate with each other's code effectively.

**Git** is a version control system that tracks and manages changes in software code. It helps software engineering teams manage their source code and entire codebase, facilitating development among multiple people.

One of the most important features of any version control system is the ability to revert changes and manage versions. If a mistake is made in the code, developers can revert to a previous working version. This prevents issues for other team members and speeds up debugging.

Git is essential for tracking rapid software code changes.

**GitHub** is a platform that allows developers to store their code in repositories (repos). Repos provide a project workspace that helps developers perform version control without using the command line. Sometimes using GitHub to set up a project and manage changes can be easier.

Common GitHub features include:

- File tracking
- Version control
- Debugging
- Security and file protection

For more information, refer to the [GitHub Documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories).

## Getting Started

- When you create a new project, you initialize a repository.
- When you have an existing project, you clone a repository.

Cloning makes a copy of a repo from GitHub onto your editor or IDE and asks you to save it to a location on your computer. This is known as local development.

### Branching and Development Workflow

#### Before beginning development

1. Create a branch using the branch naming convention:
   - `username/feature-name`
   - Example: `peterlu/feature`
   - Avoid too broad and too specific branch names(ex: frontend, backend, button-color, etc)

#### After making code change in a file

1. Staging changes:
   - All changes: `git add .`
   - A single file `git add [filename]`
2. Commit the changes with a clear message: `git commit -m "YOUR MESSAGE HERE"`

   - Example:

     ```bash
     git add .
     git commit -m "add login functionality to nav bar"
     ```

3. Push the changes to the remote repository:

- changes will reflect on the remote branch that you created in your working directory

  - Example:

  ```bash
  git push
  ```

4. Create a pull request on Github:

- add a assignee, reviewer, and relevent labels(see below)

### Best Practices for Commit Messages

- Limit commit messages to 50 characters.
- Use meaningful and descriptive messages.
- Follow a consistent format starting either following actions:
  - **add**: new features or code
  - **update**: updates to existing features or code
  - **fix**: bug fixes or typo corrections
  - **create**: creating new files or directories
  - **remove** remove a file or folder

### Working with GitHub

- **NEVER** commit directly to the production (prod) branch.
- Use the development (dev) branch for staging development code changes.
- The prod branch is reserved for stable code ready for production deployment.
- Create a pull request from your feature branch to the main branch.
- A reviewer must approve the pull request before merging.
- Close the pull request by merging the changes.

### Directory and Folder Naming Conventions

- Use meaningful directory names.
- If using multiple words, separate them with an underscore (`_`).
  - Example: `example_folder.js`

### Creating Pull Requests

Always ensure the following before creating a pull request:

1. **Reviewer**: Assign the appropriate reviewers:

   - React or TailwindCSS: Kelly, Valerie
   - Nextjs: Peter, Alex
   - Database: Peter
   - Debugging: Peter, Alex
   - Performance: Peter
   - Forms: Kelly, Valerie
     -Dashboard: Peter, Alex
   - APIs: Peter, Alex
   - Documentation: Any Lead

2. **Assignee**: You are responsible for your own pull request.
3. **Labels**: Assign relevant labels to organize issues and pull requests:
   - **Auth**: User authentication
   - **Bug**: Code block causing an issue
   - **Content**: HTML content to be
   - **Dashboard**: Admin and member count
   - **Database**: Optimization and memory management
   - **Don’t Merge**: Pull request should not be closed.
   - **Don't Merge or Address**: Pull request should not be closed by you, Leads only.
   - **Forms**: Sign-up/login, events, substack
   - **Documentation**: README, JSX, engineering
   - **Initialization**: Codebase and new source code creation
   - **Leads**: Issues created by leads
   - **New Feature**: Code for feature creation
   - **Performance**: Network and Query optimization
   - **Production Ready**: Code fix before pushing to production
   - **React**: React specific inquiries
   - **TailwindCSS**: Tailwind specific inquiries
   - **Nextjs**: Nextjs specific inquiries
   - **Database**: database inquiries
   - **Ready for Review**: Code fix before creating a pull request for feature
   - **Ready to Merge**: Code fix before closing the pull request for feature

Pull requests have a comment section to discuss changes and resolve merge conflicts.

### Development Tips

- **Git pull** should be the first action before starting development to ensure your local repository is up to date.
- Ensure you are not working off the main branch.
- If you encounter merge conflicts, resolve them using your IDE (e.g., VSCode).
- Pull requests should be reviewed by at least one lead.
- Production-ready pull requests should be assigned to two leads for review.
