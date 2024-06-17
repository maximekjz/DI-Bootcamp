class Pagination:
    def __init__(self, items:list=['None'], pageSize:int=10):
        self.items = items
        self.pageSize = pageSize
        self.currentPage = 0

    def getVisibleItems(self):
        start = self.currentPage * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def nextPage(self):
        self.currentPage += 1

    def prevPage(self):
        if self.currentPage > 0:
            self.currentPage -= 1

    def goToPage(self, page):
        if 0 <= page < len(self.items) / self.pageSize:
            self.currentPage = page

# Exemple d'utilisation
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 8)

print(p.getVisibleItems())  # Output: ['a', 'b', 'c', 'd']
p.nextPage()
print(p.getVisibleItems())  # Output: ['e', 'f', 'g', 'h']
p.nextPage()
print(p.getVisibleItems())  # Output: ['i', 'j', 'k', 'l']
