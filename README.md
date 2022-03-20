# SDE-project

Onze [Repository](https://github.com/JustDave2002/SDE-project).

In dit project hebben Rohan en Dave heel nauw samengewerkt. Wij hebben bepaalde taken verdeeld, en hebben deze gemaakt. Omdat wij de hele tijd in contact waren hebben wij uiteindelijk veel samen geprogrammeerd en hebben wij ons niet altijd aan ons branching gehouden. 
De samenwerking verliep zonder problemen wegens het goede contact en we werkten heel efficient samen. 

Een aantal van onze commits:

![image](https://i.imgur.com/7ngfetp.png)

<br>

## Creational design pattern
Wij hebben voor creational design 2 verschillende factories gemaakt. Dit zijn de EnemyFactory en de PlayerFactory. 
Deze factories zorgen voor het creëren van verschillende soorten enemies en players. 

Hieronder kunt ziet u de EnemyFactory, hierin wordt door middel van een willekeurig getal (tussen de 0 en 2) gekozen welke enemy uit de enemies array gekozen wordt.

![image](https://i.imgur.com/iRwC88C.png)


Deze factory heeft een abstract enemy class waar alle functies in staan die het zelfde zijn voor alle enemies.

![image](https://i.imgur.com/j1q5WW0.png)


De screenshot hieronder bevat 1 van de specifieke enemies. Deze enemies hebben specifieke damage en hp voor variatie in de game.

![image](https://i.imgur.com/bnXbA9P.png)


Het zelfde concept hebben we gebruikt bij de Player factory om meerdere players met verschillende damage en hp te maken.

<br>

## Structural design pattern
Voor de structural design pattern hebben we gekozen om een facade te maken. Deze facade is de brug tussen onze game code en de main game loop met alle logica er in. Dit maakt het makkelijk om vanuit de Game.ts belangrijke functies uit te voeren. 

<br>


![image](https://i.imgur.com/23zXeB2.png)

<br>

## Behavioural design pattern
Voor de behavioural design pattern hebben we gekozen om een Strategy design pattern te maken. In het specifiek hebben we de attack functionaliteit opgesplitst in meerdere strategies. Zo hebben we een enemyAttack, een primaryAttack en een secondaryAttack. Deze attacks hebben allemaal verschillende berekenigen voor de damage die de attack dealt.

Als eerste hebben we de context van de Strategy, dit bestand zorgt er voor dat de juiste strategy opgeslagen wordt en de AttackStrategy functie callable is.

![image](https://i.imgur.com/nHMHnvT.png)

De AttackStrategy is het interface van de attacks

![image](https://i.imgur.com/z3QsVKR.png)

De primaryAttack is een voorbeeld van een daadwerkelijke attack. Deze class bevat de specifieke logic en is voor elke attack vershillend. 

![image](https://i.imgur.com/MQxGG5F.png)