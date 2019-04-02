# mega-repo-template
Template for building apps with multiple subdomains hosted on heroku

to setup common build files run

    bin/create_symlinks

a symlink to the root `common` folder will be created inside every directory with a `vendor` folder

## to deploy to heroku:

edit the `deploy` script in the `bin` folder. Replace the `PROJECT` variable with your repo name,
and the `REPO` variable with your github organization url

if your heroku subdomain does not follow the format _$PROJECT-$FOLDER_
create a text file `repo_name` in each heroku folder that does not conform
containing ONLY the heroku subdomain
