class SourceEntry:
    __fileName = '';
    __filePath = '';
    __fileAbsPath = '';
    __content = '';

    def __init__( self, fileName=None, filePath=None, fileAbsPath=None, content=None ):
        self.setFileName( fileName );
        self.setFilePath( filePath );
        self.setFileAbsolutePath( fileAbsPath );
        self.setContent( content );

    def setFileName( self, fileName ):
        if ( type( fileName ) is not str ):
            return False;
        self.__fileName = fileName

    def getFileName( self ):
        return self.__fileName;

    def setFilePath( self, filePath ):
        if ( type( filePath ) is not str ):
            return False;
        self.__filePath = filePath;

    def getFilePath( self ):
        return self.__filePath;

    def setFileAbsolutePath( self, absolutePath ):
        if ( type( absolutePath ) is not str ):
            return False;
        self.__fileAbsPath = absolutePath;

    def getFileAbsolutePath( self ):
        return self.__fileAbsPath;

    def setContent( self, content ):
        if ( type( content ) is not str ):
            return False;
        self.__content = content;

    def getContent( self ):
        return self.__content;

    def __str__( self ):
        return  ( "{ filename: %s, fileAbsPath: %s }" % 
            ( self.getFileName(),  self.getFileAbsolutePath() ) );
