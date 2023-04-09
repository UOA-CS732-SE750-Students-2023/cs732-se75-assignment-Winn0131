# CS732 Angular-based website creation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Angular project creation basic tutorial

1. Open the cmp command interface and type `npm install -g @angular/cli@8.3.0` to install angular scaffolding
2. Type `ng`, this allows the ng command to be used globally
3. `ng --version`, to see the version of angular installed
4. Open the folder where you want to place the project, shift plus right mouse button to open Windows powershell
5. `ng new project name --style=less --routing -S` Generate project file
6. Open the project with vscode, the file under src is the main code storage location.
7. Angular.json file is the project configuration, here you can see the global configuration of the project
8. Type `ng serve` to run the program
9. We need to create some other modules to achieve the modularity of the project, because if the project is large, all the modules are managed in the app module, it will lead to too much pressure on it and more trouble to maintain. So we can avoid these problems by creating some modules to manage other modules.
10. Modularization: Enter `ng g m core` in the terminal to create core module, which can be used to manage other modules, and app module can be used to introduce core module only.
11. Create the share module, `ng g m share`, to store the global frequently used public assemblies, directives and components.
12. Create pages module and service module, service module is mainly to store various services, and then import these three modules into core module and export them.
13. core module should only be imported by app module, because it can manage all other modules, only app module manages it. All we need is to inject it in the constructor itself. The role of @skipself is not to look for the core module itself, so as to avoid infinite loops.
However, angular's dependency injection has a problem. If the dependent module is not found, then it will report an error, but the core module is definitely not available when we inject it for the first time. So we need to add @optional, which will assign a none value to the parent module when the core module is not found, to avoid error reporting.
15. `Ng g c pages/home`, create the home page of the web page
16. `Ng g m pages/home --routing`, create the home module under pages and generate the routing file for home. Then import the home module into the pages module. the home module also needs to export and write the path file.
17. Then write paths in the app module to the home model
