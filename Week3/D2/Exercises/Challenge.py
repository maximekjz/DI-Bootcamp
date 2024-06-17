class Pagination:
    def __init__(self, items:list=['None'], pageSize:int=10):
        self.items = items
        self.pageSize = pageSize
        self.currentpage=5
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize-1)

    def getVisibleItems(self):
        start=self.currentpage*self.pageSize
        end=start+self.pageSize
        print(f'{self.items[start:end]}')
            
    def prevPage(self):
        if self.currentpage>1:
            start=(self.currentpage-1)*self.pageSize
            end=start+self.pageSize
            print(f'{self.items[start:end]}')
    
    def nextPage(self):
        if self.currentpage<self.totalPages:
            start=self.currentpage*self.pageSize
            end=start+self.pageSize
            print(f'{self.items[start:end]}')

    def firstPage(self):
        end=self.pageSize
        print(f'{self.items[:end]}')

    def lastPage(self):
        start=(self.totalPages)*self.pageSize
        print(f'{self.items[start:]}')

    def goToPage(self, pageNum):
        start=(pageNum-1)*self.pageSize
        end=start+self.pageSize
        print(f'{self.items[start:end]}')
        self.currentpage=pageNum

    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

p.getVisibleItems()
p.firstPage()
p.lastPage()
p.goToPage(2)
p.nextPage()
p.prevPage()
p.nextPage()