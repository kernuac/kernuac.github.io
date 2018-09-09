import os;
from sourceEntry import SourceEntry;

class EntryCreatorFromPath():
    __entryPath = '';

    def __init__( self, entryPath=None ):
        self.setEntryPath( entryPath );

    def setEntryPath( self, entryPath ):
        if( type( entryPath ) is not str ):
            return False;
        self.__entryPath = entryPath;

    def getEntryPath( self ):
        return self.__entryPath;

    def create( self ):
        entry = SourceEntry();
        entry.setFileName( os.path.basename( self.getEntryPath() ) );
        entry.setFileAbsolutePath( self.getEntryPath() );
        entry.setFilePath( os.path.relpath( self.getEntryPath() ) );
        entry.setContent( self.__readFile( self.getEntryPath() ) );
        return entry;

    def __readFile( self, entryFile ):
        if ( not os.path.isfile( entryFile ) ):
            return false;
        
        file = open( entryFile, 'r' );
        
        return file.read();

