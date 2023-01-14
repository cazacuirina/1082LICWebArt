# 1082LICWebArt

#ETAPA 1 -	Specificații detaliate, planul de proiect
https://www.canva.com/design/DAFSBb2n5pY/No2uXp6My9Kkxj0kSgNoJA/edit?utm_content=DAFSBb2n5pY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
#Aici am inclus mock-up pentru interfete si structura sumara a bazei de date

#ETAPA 2 -	Serviciu RESTful funcțional
Pentru acces API: "https://localhost:3000/api/nume_tabela/params"

Am creat tabela de Utilizatori, ce stocheaza numele, emailul ("@stud.ase.ro" - student si "@ie.ase.ro" - prof), tipul(true - prof, false -  stud),  si parola (criptata - bcrypt). Requesturile posibile ce se pot face din API sunt:
-POST (/signup): crearea unui utilizator -body: numne,email,parola
-POST (/signin): logarea unui utilizator pe platforma -body: email,parola
-GET (activitati/prof/:profId): selectarea activitatilor unui profesor

Am creat tabela de Activitati, ce stocheaza denumirea, descrierea, data si ora programate, durata, codul unic de acces si codul ownerului (profesorului). Requesturile posibile ce se pot face din API sunt:
-GET (/:denumire): selectarea unei activitati dupa denumire
-POST (/creare/prof/:profId): crearea unei activitati de catre profesor - body:denumire,data,durata,descriere,codAcces
-POST (/inrolare/stud/:studId/codActivitate/:codAcces): inrolarea studentului la o activitate pe baza codului de acces

Am creat tabela de jonctiune Participanti ce realizeaza legatura dintre Utilizatorii de tip student si activitatile la care acestia se inroleaza. Requesturile posibile ce se pot face din API sunt:
-GET (activitati/stud/:studId): selectarea activitatilor unui student

Am creat tabela de Feedback, ce stocheaza data si ora si reactia (1-smiley, 2-surprised, 3-confused, 4-frowned). Requesturile posibile ce se pot face din API sunt:
-POST (/activ/:activId/stud/:studId): postarea unui feedback de catre un student -body: reactie
-GET (/activ/:activId/count): preluarea feedback-ului agregat pe momente de timp corespunzator unei activitati de catre un profesor
-GET(/activ/:activId/stud/:studId/count): preluarea feedback-ului total corespunzator unei activitati, al unui student

