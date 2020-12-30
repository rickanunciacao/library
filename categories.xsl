<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <table id="categoryList" border="1" class="indent">
            <thead>
                <tr>
                    <th colspan="8">Book's Categories</th>
                </tr>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/home/category">
                    <tr id="{position()}">
                        <td>
                            <xsl:value-of select="name" />
                        </td>
                    </tr>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>