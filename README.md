# Demo sheet

The aims of this demo are:
1. Use Shadcn's Sheet, Form inputs, and Dropdown menu components
2. Use React hook form
3. Add a form to a sheet
4. Attach multiple forms to the page
5. Enable opening a sheet from a dropdown menu item
6. Have the sheet contents reactive able to show/hide form controls based on other values


---

### Implementation
The multiple sheet-forms is achieved by simply adding all the sheets at the bottom of the page and implementing a global
context that calls out the name of the sheet that should be shown.  The sheets are responsible for showing themselves
when called upon and manage their own hiding after form submission.