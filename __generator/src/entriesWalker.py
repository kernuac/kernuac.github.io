import os;
from entryCreatorFromPath import EntryCreatorFromPath as EntryCreator;

class EntriesWalker:
    def __init__( self, entriesPath=None ):
        self.__entries = [];
        self.setEntriesPath( entriesPath );        

    def setEntriesPath( self, entriesPath ):
        if ( type ( entriesPath ) is not str ):
            return False;
        self.__entriesPath = os.path.abspath( entriesPath );

    def getEntriesPath( self ):
        return self.__entriesPath;

    def retrieveEntries( self ):
        entries = [];
        absPath = self.getEntriesPath();
        
        entriesFiles = os.listdir( absPath );
        
        entries = [ 
            EntryCreator( os.path.join( absPath, entryFile ) ).create() 
            for entryFile in entriesFiles 
        ];

        return entries;
      
def main():
    walker = EntriesWalker( '../../__posts' );
    entries = walker.retrieveEntries();
    entries.sort( reverse=True );
if ( __name__ == '__main__' ):
    main();
    
