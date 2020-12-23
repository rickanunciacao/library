<?xml version="1.0" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
<xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <table id="bookList" border="1" class="indent">
            <thead>
                <tr>
                    <th colspan="8">Rick's Library</th>
                </tr>
                <tr>
                    <th>Select</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year</th>
                    <th>Edition</th>
                    <th>Editor</th>
                    <th>ISBN</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <xsl:for-each select="/home/section">
                    <tr>
                        <td colspan="8" align="center">
                            <xsl:value-of select="@category" />
                        </td>
                    </tr>
                    <xsl:for-each select="book">
                        <tr id="{position()}">
                            <xsl:attribute name="isNew">
                                <xsl:value-of select="boolean(@isNew)" />
                            </xsl:attribute>
                            <td align="center">
                                <input name="item0" type="checkbox" />
                            </td>
                            <td>
                                <xsl:value-of select="title" />
                            </td>
                            <td>
                                <xsl:value-of select="author" />
                            </td>
                            <td>
                                <xsl:value-of select="publishing-year" />
                            </td>
                            <td>
                                <xsl:value-of select="edition" />
                            </td>
                            <td>
                                <xsl:value-of select="editor-house" />
                            </td>
                            <td>
                                <xsl:value-of select="isbn" />
                            </td>
                            <td align="right">
                                <xsl:value-of select="price" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </xsl:for-each>
            </tbody>
        </table>
    </xsl:template>
</xsl:stylesheet>