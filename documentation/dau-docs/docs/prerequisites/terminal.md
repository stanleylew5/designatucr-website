---
sidebar_label: 'Terminal Commands'
sidebar_position: 2
---

# Terminal/Command Line

The terminal (also known as the command line or shell) is a text-based interface used to interact with the operating system. It allows users to execute commands to perform tasks such as navigating the file system, managing files and directories, running scripts, and more. It's a powerful tool for developers and should be learned well. Below are some the most common commands you may use.

## Basic Terminal Commands
This section goes over common commands you will use during development when interacting with there command line.
### Windows Command Prompt (cmd) and PowerShell

#### 1. Navigating Directories
- **`dir`**: Lists the contents of a directory.
  ```sh
  dir
  ```
- **`cd`**: Changes the current directory.
  ```sh
  cd path\to\directory
  ```
- **`cd ..`**: Moves up one directory level.
  ```sh
  cd ..
  ```

#### 2. File and Directory Management
- **`mkdir`**: Creates a new directory.
  ```sh
  mkdir directory_name
  ```
- **`rmdir`**: Removes a directory.
  ```sh
  rmdir directory_name
  ```
- **`del`**: Deletes a file.
  ```sh
  del file_name.ext
  ```
- **`copy`**: Copies files from one location to another.
  ```sh
  copy source_file destination_file
  ```

#### 3. Viewing and Editing Files
- **`type`**: Displays the contents of a file.
  ```sh
  type file_name.ext
  ```

#### 4. System Commands
- **`cls`**: Clears the screen.
  ```sh
  cls
  ```
- **`exit`**: Closes the command prompt.
  ```sh
  exit
  ```

### macOS Terminal (Bash or Zsh)
- Commands are slighty different compared to windows so use the correct commands.
#### 1. Navigating Directories
- **`ls`**: Lists the contents of a directory.
  ```sh
  ls
  ```
- **`cd`**: Changes the current directory.
  ```sh
  cd /path/to/directory
  ```
- **`cd ..`**: Moves up one directory level.
  ```sh
  cd ..
  ```

#### 2. File and Directory Management
- **`mkdir`**: Creates a new directory.
  ```sh
  mkdir directory_name
  ```
- **`rmdir`**: Removes an empty directory.
  ```sh
  rmdir directory_name
  ```
- **`rm -r`**: Removes a directory and its contents.
  ```sh
  rm -r directory_name
  ```
- **`rm`**: Deletes a file.
  ```sh
  rm file_name.ext
  ```
- **`cp`**: Copies files or directories.
  ```sh
  cp source_file destination_file
  ```

#### 3. Viewing and Editing Files
- **`cat`**: Displays the contents of a file.
  ```sh
  cat file_name.ext
  ```
- **`nano`**: Opens a file in the Nano text editor.
  ```sh
  nano file_name.ext
  ```

#### 4. System Commands
- **`clear`**: Clears the screen.
  ```sh
  clear
  ```
- **`exit`**: Closes the terminal.
  ```sh
  exit
  ```

### Additional Useful Commands for Both Windows and macOS

#### 1. Viewing the Current Directory
- **`pwd`** (Print Working Directory): Displays the current directory path.
  ```sh
  pwd
  ```

#### 2. Moving and Renaming Files
- **`move` (Windows) / `mv` (macOS)**: Moves or renames files and directories.
  ```sh
  move source_file destination_file  # Windows
  mv source_file destination_file    # macOS
  ```

#### 3. Searching for Files
- **`find` (Windows) / `find` (macOS)**: Searches for files in a directory hierarchy.
  ```sh
  find /path -name "file_name.ext"  # macOS
  ```
- **`dir /s`**: Searches for files in a directory and its subdirectories.
  ```sh
  dir /s file_name.ext  # Windows
  ```
