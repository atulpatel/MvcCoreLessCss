# MvcCoreLessCss
MvcCoreLessCss
When you are developing a multitenant application, all your tenant (customer) wants their design or color coding (theme) different as per their brand. First, you have to come up with a unique design or layout of your web app which can be neutral and can be customizable to any different design easily.  By reading this requirement, of course, you get Bootstrap in your mind. By using Bootstrap you can easily make your web app design very flexible and responsive. We all know benefits of using Bootstrap. If you don't then go to Getbootstrap.com and get it.



Bootstrap can be base for responsive web applications. You need to do custom CSS by overriding existing bootstrap classes. You can also make your customization of bootstrap common for all tenant by using .less provided by bootstrap instead directly using .css.



I have added my example of design multitenant web application design using bootstrap.



For our implementation (our example), we considered bootstrap V3.3.7 as  We still may have a learning curve of understanding of new version of the framework. We consider using new bootstrap is a little bit a risk for a team. You can use a new version of bootstrap and apply the same strategy for handling multiple tenants web design customization. We have used ASP.net MVC core project using visual studio.



Implementation of custom design has done in following steps.



## 1. Need to install basic bootstrap with .less files.
you can download bootstrap .less files from the following URL.



https://getbootstrap.com/docs/3.3/getting-started/



Also, you can implement packages like npm or nuget.



It is also described here how to install grunt and grunt commands here



https://getbootstrap.com/docs/3.3/getting-started/



(TODO:// write about folder structure and take a screenshot of an existing project)





## 2. Define your own customization on top of it using your own .less files.
As per Asp.net core MVC project folder structure, I have added bootstrap .less file under lib/bootstrap.







I have added a folder called "less" under the root folder.  Added main.less file. This can be your application main .less file. You can add reference of bootstrap.less under this. The bootstrap.less file you can locate under lib/bootstrap/less.  Bootstrap.less is the main file of bootstrap which has all reference to other bootstraps .less file and bootstrap variables. bootstrap.less looks like below.









main.less file has bootstrap.less reference.











Check bootstrap variable.less file. Bootstrap has defined all variable for all colors and size. You can directly change this variable values.  By Including bootstrap.less into main.less you can use these variables to your custom .css classes too.  You can also override values variables if you wanted to keep your custom.less file separate for each tenant. 

## 3. Install Grunt and packages for .less.
You can use Gulp or Grunt as a task runner for generating .css file from .less files. You can do other tasks also like minification and bundling using it.  For our example, we have used Grunt task runner. 



You can find the detailed article about how to use Grunt with asp.net core here and for Gulp here.

here is the getting started with Grunt.



You need Nodejs installed on your machine.  Install nodejs with Node Package Manager (npm).



You can install Grunt using npm by the following command.



npm install -g grunt-cli



For our project, we need to add npm Configuration File (package.json). 









For manual install Grunt to your project Open a command prompt and change your directory to your project directory.



cd c:\{your project directory}



If you have added nodejs to PATH environment variable then only has to apply npm command directly otherwise you have to give full path of npm exe like below and run install grunt.





C:\{your project directory}> "c:\Program Files\nodejs"\npm install grunt --save-dev



Install packages for .less



C:\{your project directory}> "c:\Program Files\nodejs"\npm install grunt-contrib-less --save-dev



o/p: 

+ grunt-contrib-less@1.4.1

added 62 packages in 8.574s



Using visual studio, You can simply update package.json file and update packages from Dependencies -> Righ click  on "npm" => Click on "Restore packages"



"Package.json"



































"Restore Package"



It will look like following after restoring package







































Add Gruntfile.js to a solution. Get more information from here  https://gruntjs.com/getting-started



sample grunt file looks like below.





## 4. Generate different stylesheet files according to custom variables using Grunt.
Using Grunt task runner you can generate .css file from .less file. We already have installed required package of .less.

we need to add grunt task for .less with different parameter options.  you can find the whole list of parameters and guideline of adding grunt task for less here.   https://www.npmjs.com/package/grunt-contrib-less



We are going to use "modifyVars" parameter to modify .less variable value. using this parameter, you can pass the value of any .less parameter like bootstrap @brand-primary.

With "files" parameter you can define Source .less file and destination .css file (result file).



In our case, we have our main.less file which has a reference of bootstrap.less along with custom CSS classes. We can define different task according to the environment. Also, we can define different task according to a tenant.









Like above gruntfile,  we have defined the task to generate CSS for the development environment and production environment.

For development, you need to check .css classes sometimes so no need to do compression. while production environment you can define compress: true. It minifies the .css.

We defined the value of 'brand-primary' variable under modifyVars for both environments.



Similar way you can add another task for a different tenant.  you can pass variable value according to customer requirement.  You can also generate different variable. less file with customer specific values and generate .css using different .less files according to tenants.

Tenant task is shown below.









## 5. Add tenant code switch.
You can change the use of .css file according to your tenant id. You can manage it by _layout.cshtml.

After login, you can get tenant name programmatically.  You can implement base controller and take one global variable which can be used for all views. I would let you decide how would you get your tenant name as I wanted to focus on switching stylesheet according to different tenant name.



In following code sample, I have created one variable called tenantcode which has tenant name. This variable can get value dynamically from server login according to who is logged.  I have used tenantcode to generate CSS name for that particular tenant.



In Asp.net MVC core, You can define the environment for development and production. You also can define your custom one. You can get more info about environment tag from this URL: https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/built-in/environment-tag-helper?view=aspnetcore-2.1



So as per our logic, it generates tenant CSS URL like "~/css/site_tenant1.css". It would be just site_.debug.css for development.







By changing tenantcode, you can just change the theme of your application.



Tenant1 theme



 Development theme





Code sample.



