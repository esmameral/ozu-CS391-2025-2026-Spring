# Main Page Formatting
1. Create a new file named styles.css in the assets/css directory
2. Define general text and paragraph formatting rules:
   
   ```
   body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    text-align: justify;
   }
   ```
3. Create a css class for main titles:
    ```
    .maintitle {
        color: #A30050;
        font-weight: 400;
        font-size: 1.375rem
    }
    ```
4. Change links formats:
   
   ```
   a {
        color: #a7024f;
        text-decoration: none;
    }
   ```

5. Update list item's format:
   ```
   li {
        line-height: 2; 
    }
    ```

# Main Page Layout

1. Style the menu links. Float links to the right

    ```
    header nav {
        float: right;
        padding-top: 10px;
    }
    ```
2. style the header 

   to fix header at the top of the window, add following css rules in the header section of the css file.
   Change the header's height and position

    ```
    top: 0;
    height: 52px;
    position: fixed;
    width: 100%;
    padding: 3px;
    ```

3. Give spaces before content of the page. Add following css class definition:

    ```
    .content {
        padding-top: 55px;
    }
    ```

4.  Let format content section. **Side** section should use 20% and **middle** section should use 80% of screen. Create two unequal columns that floats next to each other

    ```
    .column {
        float: left;
        padding: 10px;
        ...
    }
    ```

    ```
    /* Left column */
    .column.side {
        width: 20%;
    }
    /* Middle column */
    .column.middle {
        width: 80%;
    }
    ```
5. Add following css definition

    ```
    footer div {
        width: 31%;
        margin-top: 10px;
    }
    ```

6.  Remove list item's marker

    ```
    footer div ul {
        list-style-type: none;
    }
    ```
7. Style the footer

    ```
    footer {
        background-color: #ddd;
        padding: 5px 5px 5px 100px;
        margin: 0;
        clear: both;
        width: 100%;
        height: 255px;
    }
    ```
