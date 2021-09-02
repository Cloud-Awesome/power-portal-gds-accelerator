# Web Templates

## GDS Base Template

Provides the container which is extended for all other page types.

Includes the [govuk phase banner](https://design-system.service.gov.uk/components/phase-banner/) to show users your service is still in alpha/beta phases. There are two site settings that can be configured for the banner:

- `GdsService/GeneralAvailability` - boolean, set to false to display the banner, set to true to hide the banner
- `GdsService/PreGAStatus` - string, defines the value to be displayed in the banner. Usually set this to either 'ALPHA' or 'BETA'

Blocks available for extension in downstream templates are:

- `headerblock` - Intended for section caption and page heading
- `mainblock` - Intended for page's lead paragraph and page copy
- `additionalcontent` - Intended for any additional content required between main page content and the entity form (e.g. a new web template can extend the 'GDS Standard Page' or 'GDS EntityForm Template' template to include further liquid templating). This is consumed in the sample 'Check your answers' page for example 
- `entityformblock` - Intended for inclusion of Entity form and/or Entity list
- `customblock` - Intended for inclusion of any additional content required after the entity form, below the usual data entry and CTA button(s)
- `sidebar` - Intended for any content in the left-hand sidebar. Populates the left 3rd column of the grid

Also includes the 'LoadExternalCopy' web template in case you want to load HTML content from an external CMS (see description below for details)  

## GDS Standard Page

Extends 'GDS Base Template' to include section caption, page heading, lead paragraph and page copy.

The data is populated from the Web Page's localised Content Page form:

| Page component | CRM form label | CRM attribute schema name |
|---|---|---|
| Section caption | Description | adx_metadata_description |
| Page heading | Title | adx_title |
| Lead paragraph | Summary (HTML) | adx_summary |
| Page copy | Copy (HTML) | adx_copy |


## GDS EntityForm Template

Extends the 'GDS Standard Page' template to include either entity list (aka 'list') and/or entity form (aka 'basic form')

The form and/or list is populated from the Web Page's localised Content Page form:

| Page component | CRM form label | CRM attribute schema name |
|---|---|---|
| Entity list | List | adx_entitylist |
| Entity form | Basic Form | adx_entityform |

If either is not populated on the Content Page then they won't be included on the page. If both are populated then the entity list will be rendered first, followed by the basic form

N.B. The form and/or list will not pull through if not populated on the localised web page (e.g. if it is only populated on the parent web page's Information form, nothing will be rendered on the page)

## GDS Service Complete

Extends 'GDS Base Template' to include a service's '[Confirmation page](https://design-system.service.gov.uk/patterns/confirmation-pages/)'

The data is populated from the Web Page's localised Content Page form:

| Page component | CRM form label | CRM attribute schema name | Notes |
|---|---|---|---|
| Page heading | Title | adx_title | e.g. 'Application complete' |
| Lead paragraph | Summary (HTML) | adx_summary | Text which shows in the green box |
| Page copy | Copy (HTML) | adx_copy | Text which shows beneath the green box (e.g. 'What happens next' |

## GDS Task List Template

Extends the 'GDS Standard Page' template to implement the GDS [Task list pattern](https://design-system.service.gov.uk/patterns/task-list-pages/)

To use this template:
1. Create a new Web Link Set
2. Create a series of new child links under the set for each of the sections required (e.g. "Check before you start", "Prepare application", "Apply")
   - Ensure that the Name and Display order are populated
   - The Web Page reference does _not_ need to be populated - These are not going to be rendered as links
3. Under each of the 'section' links, create (grand-)child links for each page you want included
    - Ensure that the Name, Display Order, Parent Web Link, and Web Page are populated

The data is populated in the same way as for the 'GDS Standard Page' above, plus:

| Page component | CRM form label | CRM attribute schema name |
|---|---|---|
| Task list | Navigation | adx_navigation |

This template also implements a sidebar, using links in a hard-coded web link set called 'Task List Sidebar'

There are a couple of optional extra samples in this template which can be switched on or off and are commonly used or useful for development on task list-based services:

| Sample | URL parameter | 
|---|---|
| Display a 'Completed' or 'Cleared' header box | ?sample=happy |
| Display a 'Incomplete' or 'Not yet cleared' header box | ?sample=unhappy |
| Display the task list sidebar | ?sidebar=true |
| Display useful debugging data below the sidebar | ?sidebar=true&debug=true |


## GDS Interruption Card



## GDS Header



## GDS Footer


## Other pages

### Contact details/Check Your Answers

### B2C Login Page Template

### LoadExternalCopy

### 404

### CSV Download Templates
