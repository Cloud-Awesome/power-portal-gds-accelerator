# Web Files

All source code for the web files are included in the [src/assets](/src/assets) folder, including pre-compiled, unminified SCSS. I have used [sass](https://sass-lang.com/install) to compile the SCSS and [csso](https://github.com/css/csso) for CSS minification.

The [all.scss](/src/assets/css/all.scss) file imports the `govuk-frontend` node module for extension, attempting to minimise the changes required to the gds style sheets, aiding upgrade paths in the future.

The [bootstrap.css](/src/assets/css/bootstrap.css) is intentionally blank (it has a single class which is never used). This is because Portal Apps Portals require the file to be there (and will replace it with a copy if you try to delete it) but it interferes with the GDS modules and isn't required in addition to the GDS modules.