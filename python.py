#10
eur = 1 # antall Euro han skal betale
kurs = 10.5  # hvor mange NOK han må betale for 1 Euro
svar = eur * kurs
print(eur, "Euro koster kr: ", svar)

billet = 75 # antall Euro han skal betale
kurs=10.95
svar = billet * kurs

print("Anders må betale kr: ", svar)
kurs = 11.05
svar = billet * kurs
print("Eva må betale kr: ", svar)



navn="Eir Elise"
alder=16
klasse="1IMA"
skole="Amalie Skram Videregående Skole"
print(navn, alder, klasse, skole)


a = 5       # oppretter variabelen a med verdi 5
b = 7.5   # oppretter variabelen b med verdi 6
print(a*b)  # multipliserer a og b og skriver produktet til skjermen.


f = 5       # oppretter variabelen a med verdi 5
g = 3.5  # oppretter variabelen b med verdi 3,5
print(a*b)  # multipliserer a og b og skriver produktet til skjermen.
print(type(a)) # skriver ut hvilke type tall verdien til a er
print(type(b)) # skriver ut hvilke type tall verdien til b er
# desimantall i python heter float og heltall heter int


navn = input("Hva heter du?")
alder = input("Hvor gammel er du?")
rett=input("Hvilken matrett liker du best?")

print("Hei " + navn + "! Du er " + alder + " år. Favorittretten din er " + rett)
# input-funksjonen brukes for å hente inn data fra brukeren

tall = input("Skriv inn et tall: ")
svar = tall * 3
print("Tallet ditt ganger 3 er: ", svar)
#dette er bare input
tall = int(input("Skriv inn et tall: "))
svar = tall * 3
print("Tallet ditt ganger 3 er: ", svar)
#dette er input konvertert til heltall
tall = float(input("Skriv inn et tall: "))
svar = tall * 3
print("Tallet ditt ganger 3 er: ", svar)
#dette er input konvertert til desimaltall

a = float(input("Hvor mange is skal du kjøpe? "))
svar = a * 15
print("Prisen blir: " , svar)

timer=24
uker = 52
dager = 7
år = uker * dager
print(år)
#programmet skriver ut hvor mange dager det er i et år

juli=timer*31
print(juli)
#programmet skriver ut hvor mange timer det er i juli



a = float(input("Hvor mange porsjoner skal lages? "))
b = a * 2.5
print("Du trenger", b, " dl mel. ")

#programmet viser hvor mye mel som trengs for et gitt antall porsjoner

desiliter=1.5
for i in range(2,6):
    print("for", i , "liter saft trengs", desiliter*i )

for i in [2.5 , 4.5 , 6.5]:
    print("for", i , "liter saft trengs", desiliter*i )


a = float(input("Hvor mange liter vaffelrøre skal lages? "))
b = a * 4
print("Du trenger", b, " dl mel. ")
#i stedet for int som er for heltall, må man bruke float for desimaltall








#from matplotlib import pyplot # importerer et bibliotek som kan lage diagrammer
x = ["katt", "hund","fugl","andre dyr","ingen dyr"] #lager en liste x med 5 elementer 
y = [7,5,3,4,6] #lager en liste y med frekvensene til elementene i liste x
#pyplot.bar(x,y) # lager stolpediagram  med elementene fra x og y
#pyplot.show() # skriver diagrammet til skjermen