import os, re
from sourceEntry import SourceEntry;
class ParseToHtml:
    __output        = '';
    __titles        = re.compile(r'((\#{1,4})([A-Za-z0-9\ \.]+))');
    __links         = re.compile(r'');
    __lists         = re.compile(r'');
    __images        = re.compile(r'');
    __paragraphs    = re.compile(r'(.+?)+');

    def __init__( self ):
        #print( self.__titles );
        pass

    def parse( self, entry ):
        self.__output = entry.getContent();
        self.__parseTitles();
        #self.__parseList();
        #self.__parseLinks();
        self.__parseParagraphs();
        #print self.__output;
    #just for testing...
    def writeFile( self ):
        print ('<article>' + self.__output + '</article>');

    def __parseTitles( self ):
        result = re.findall(self.__titles, self.__output);
        [ self.__parseTitle( replacer ) for replacer in result ];
        
        #subtitleCounter = str( result.group(2).count('#') + 2 );
        #titleReplace = r'<h' + subtitleCounter +'>' + result.group(3) + '</h'+ subtitleCounter + '>';
        #self.__output = re.sub(
        #    self.__titles, titleReplace, self.__output);
        #print self.__output;
    
    def __parseTitle( self, textReplace ):
        regex = re.compile(textReplace[0]);
        titleType = str( textReplace[1].count('#') +  2 );
        replace = r'<h'+titleType+'>'+textReplace[2]+'</h'+titleType+'>';
        self.__output = re.sub(regex, replace, self.__output);
        
    def __parseParagraphs( self ):
        result = re.findall( self.__paragraphs, self.__output );
        print self.__output
        print result
        #[ self.__parseParagraph( replacer ) for replacer in result ];

    def __parseParagraph( self, textReplace ):
        print( textReplace );


#--- test ---
def main():
    entry = SourceEntry();
    entry.setFileName('2018-09-09-FirstEntry.md');
    entry.setContent("""
#First Entry

This is my first entry, and it's only for triying my new site generator.
The main idea is creating an html file from a markdown file.

I hope you enjoy this entry.

##Subtitle

###SubSubTitle
Bye!.
""");

    parser = ParseToHtml();
    parser.parse(entry);
    parser.writeFile();
if __name__=="__main__":
    main();
