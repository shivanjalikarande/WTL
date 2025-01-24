<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Employee List</title>
                <style>
                    /* Style for the body */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        display: flex;
                        justify-content: center; /* Center horizontally */
                        align-items: center; /* Center vertically */
                        height: 100vh;
                        margin: 0;
                        flex-direction: column; /* Arrange items vertically */
                        text-align: center; /* Center text inside body */
                    }

                    /* Style for the title */
                    h1 {
                        color: #333;
                        margin-top: 20px; /* Space from the top */
                    }

                    /* Style for the table */
                    table {
                        width: 60%; /* Table width set to 60% */
                        border-collapse: collapse;
                        margin: 20px 0; /* Space around the table */
                        background-color: #fff;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                        margin-top: 30px; /* Add space before table */
                    }

                    /* Table and cell borders */
                    table, th, td {
                        border: 1px solid #ddd;
                    }

                    /* Style for table header */
                    th {
                        background-color: #4CAF50;
                        color: white;
                        padding: 12px;
                        text-align: center;
                    }

                    /* Style for table cells */
                    td {
                        padding: 10px;
                        text-align: center;
                    }

                    /* Alternate row coloring */
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Employee List</h1>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                    <xsl:for-each select="organization/employee">
                        <tr>
                            <td><xsl:value-of select="id"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="designation"/></td>
                            <td><xsl:value-of select="department"/></td>
                            <td><xsl:value-of select="salary"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
