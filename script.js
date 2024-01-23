document.addEventListener('DOMContentLoaded', function () {
    var textContainer1 = document.getElementById('text-container-1');
    var textContainer2 = document.getElementById('text-container-2');
    var textContainer3 = document.getElementById('text-container-3');
    var textContainer4 = document.getElementById('text-container-4');
    var textContainer5 = document.getElementById('text-container-5');
    var textContainer6 = document.getElementById('text-container-6');
    var textContainer7 = document.getElementById('text-container-7');
    var textContainer8 = document.getElementById('text-container-8');
    var textContainer9 = document.getElementById('text-container-9');
    var textContainer10 = document.getElementById('text-container-10');
    var textContainer11 = document.getElementById('text-container-11');
    var textContainer12 = document.getElementById('text-container-12');

    
    function updateText() {
        var windowWidth = window.innerWidth;

        if (windowWidth < 480) {
            textContainer1.innerHTML = 'Il presente documento è una sintesi rispetto alcuni punti salienti dell\'Accordo sulla riorganizzazione del settore Infrastrutture RFI.<br>L\'<a href="2024.01.10_ACCORDO_Manutenzione_Infrastrutture.pdf">accordo sottoscritto il 10 gennaio 2024</a> è stato caratterizzato...';
            textContainer2.innerHTML = 'CSE/DL livello professionale A figura professionale Impiegato Direttivo che svolgono compiti:<br>- Fino a 20 mln per gli appalti civili ed interessanti l\'intero ciclo di vita dell\'appalto.<br>- Fino a...';
            textContainer3.innerHTML = 'Le operazioni di gestione materiali vengono accentrate nella struttura di Programmazione e Controllo delle Unità Territoriali, fatta eccezione per la gestione dei materiali correnti e di pronto intervento,...';
            textContainer4.innerHTML = '<i><u>1 Responsabile</u> RSO</i> livello professionale Q posizione retributiva Q1.<br><u><i>1 Specialista infrastrutture</i></u> figura professionale professional Q posizione retributiva Q2. In tutte le UM...';
            textContainer5.innerHTML = '<b><i><u>La composizione delle squadre di manutenzione</u></i></b><br>Qualitativa terrà conto da quanto previsto dalle procedure in materia di sicurezza (es. Mol, Mov, ecc..)<br>Quantitativa<br>1 CT coordinerà...';
            textContainer6.innerHTML = '<b><i><u>UM Cantieri Meccanizzati</u></i></b><br>1 Responsabile RSO livello professionale Q posizione retributiva Q1.<br>1 Specialista Diagnostica figura professionale professional Q posizione retributiva Q2....';
            textContainer7.innerHTML = '<b><i><u>Composizione squadre di manutenzione TLC e SSE/LP</u></i></b><br>Qualitativa terrà conto da quanto previsto dalle procedure in materia di sicurezza (es. Mol, Mov, ecc...)<br>Quantitativa<br>1 CT coordinerà...';
            textContainer8.innerHTML = 'Per le attività svolte su prestazione unica giornaliera le parti concordano le seguenti modalità di programmazione da contrattare territorialmente come previsto dal punto H.<br>- Per le attività interessanti...';
            textContainer9.innerHTML = 'In ogni unità produttiva l\'informativa dei piani di attività annuali, per ciascuna unità territoriale, riguarderà gli spazi manutentivi disponibili in programmazione, le fasce orarie/giornaliere di cui...';
            textContainer10.innerHTML = 'Il turno di reperibilità interesserà la squadra che effettua la prestazione pomeridiana e non è interessata da prestazioni notturne, laddove possibile, il giorno di riposo settimanale è escluso dal turno di...';
            textContainer11.innerHTML = 'Mobilità.<br>Prima della fase assunzionale, in proporzione al numero degli stessi e tenendo conto delle esigenze di servizio, la società darà seguito ad un numero di domande di trasferimento prodotte verso le...';
            textContainer12.innerHTML = '<li>Art.36 contratto aziendale punto 2 6° giorno € 24.<li>Art.36 contratto aziendale punto 2 7° giorno € 34.<li>Art.76 CCNL punto 1 indennità domenicale € 20.';
        
        } else {
            textContainer1.innerHTML = 'Il presente documento è una sintesi rispetto alcuni punti salienti dell\'Accordo sulla riorganizzazione del settore Infrastrutture RFI.<br>L\'<a href="2024.01.10_ACCORDO_Manutenzione_Infrastrutture.pdf">accordo sottoscritto il 10 gennaio 2024</a> è stato caratterizzato da un confronto complesso durato quasi tre anni, sospeso nel maggio 2023, per volontà della Filt Cgil che ha rivendicato con forza che la sicurezza non sia più un semplice obiettivo da raggiungere, ma una priorità assoluta. Per questo, è necessario investire in sicurezza e garantire ai lavoratori le condizioni necessarie per operare in sicurezza.<br>Concetti ribaditi nel Settembre 2023 dalla Filt Cgil, nel documento politico <a href="deve esserci un dopo Brandizzo.pdf">"DEVE ESSERCI UN DOPO BRANDIZZO PER TUTTI"</a>, in cui si è chiesto: un maggior investimento in sicurezza, sia in termini di risorse finanziarie che di formazione obbligatoria (teorica e pratica) dei lavoratori di RFI e degli appalti; una revisione dell\'organizzazione del lavoro, che concili l\'esigenza aziendale di presidio manutentivo con quella di stabilire un\'equa ripartizione della prestazione lavorativa tra i lavoratori garantendo maggiori spazi manutentivi.<br>Il documento della Filt Cgil rappresenta un punto di partenza importante per avviare un dibattito serio e costruttivo sul tema della sicurezza nel settore dei trasporti e siamo soddisfatti che nell\'accordo sono stati recepiti i primi elementi qualificanti, rivendicati dalla Filt Cgil, che riportano al centro della discussione della contrattazione territoriale temi quali:<br><b>Internalizzazione e formazione</b><br>Acquisizione di nuovi treni e mezzi d\'opera per la realizzazione di attività core in house.<br>Percorsi di apprendimento sul campo per la internalizzazione di attività che non necessitano di mezzi d\'opera (cambio filo e revisione TE, risanamento di piccoli tratti di binario, sostituzione di tratti di rotaia).<br>Incremento del numero degli istruttori esclusivamente dedicati al rolo di formatori nell\'ambito della Technical Academy.<br><b>Sicurezza</b><br>Un rafforzamento del ruolo di controllo e verifica nei cantieri di lavoro, anche nei confronti delle ditte appaltatrici.<br>Sede permanente di incontri sulle tematiche riconducibili alla formazione e alla sicurezza del lavoro. Incontri trimestrali a livello nazionale e di norma semestrali a livello territoriale.';
            textContainer2.innerHTML = 'CSE/DL livello professionale A figura professionale Impiegato Direttivo che svolgono compiti:<br>- Fino a 20 mln per gli appalti civili ed interessanti l\'intero ciclo di vita dell\'appalto.<br>- Fino a 12 mln per gli appalti tecnologici ed interessanti l\'intero ciclo di vita dell\'appalto.<br>-Progettazione con compiti di verifica di progetti realizzati da terzi.<br>CSE/DL livello professionale Q parametro retribuito Q2 figura professionale professional<br>- Valori economici superiori ai precedenti punti.<br>- Progettazione relativi a progetti internalizzati.<br><i>Reparto Ponti e verifica opere d\'arte di SO Ingegneria</i>, in possesso di abilitazione OC2, che svolgono compiti di verifica livello professionale Q parametro retribuito Q2 figura professionale professional<br>Nell\'ottica di rafforzare il ruolo di controllo e verifica del committente RFI, le parti a livello di unità produttiva negozieranno quanto previsto in materia di orario di lavoro per individuare articolazioni di orario interessanti prevalentemente le fasce orarie/giornaliere caratterizzate dai cantieri notturni.';
            textContainer3.innerHTML = 'Le operazioni di gestione materiali vengono accentrate nella struttura di Programmazione e Controllo delle Unità Territoriali, fatta eccezione per la gestione dei materiali correnti e di pronto intervento, la valutazione tecnica e compilazione del registro carico/scarico rifiuti del tolta d\'opera e dei rifiuti generici che restano in ambito UM.<br>In ogni Magazzino Materiale (vedi allegato 3) sono previsti almeno 2 <i>addetti</i> alla gestione materiali con profilo professionale specialista tecnico amministrativo livello professionale B.<br>Restano confermate le manifestazioni di interesse già emanate.<br><b>Gestione delle visite annuali alle opere d\'arte</b><br>Struttura UO Nucleo Opera d\'Arte (sedi vedi allegato 3)<br><u>1 Responsabile</u> Figura professionale RLO livello professionale Q, posizione retributiva Q2.<br>Minimo <u>2 addetti</u> figura professionale capo tecnico infrastrutture livello professionale B.<br>Le risorse interessate dovranno essere in possesso di abilitazione OC1.';
            textContainer4.innerHTML = '<i><u>1 Responsabile</u> RSO</i> livello professionale Q posizione retributiva Q1.<br><u><i>1 Specialista infrastrutture</i></u> figura professionale professional Q posizione retributiva Q2. In tutte le UM con estensione compresa tra 180 km e 300 km e UM con aventi giurisdizione su linee definite Nodo, è presente un secondo specialista infrastrutture professional Q posizione retributiva Q2. Nelle UM IS con nuclei SCC è presente uno Specialista SCC figura professionale professional Q posizione retributiva Q2.<br><u><i>2 addetti figura professionale</u></i> specialista tecnico amministrativo livello professionale B.<br>A livello di Unità Produttiva le parti avvieranno un confronto finalizzato alla rivisitazione dell\'ambito di giurisdizione di ciascuna UM, individuando una estenzione pari a 150 km di linea (ad eccezione di UM Nodo e AV/AC) e non superiore a 300 km di linea, fermo restando la sussistenza degli attuali impianti, prevedendo anche l\'istituzione di nuove UM ove tale giurisdizione superi i 300 km,';
            textContainer5.innerHTML = '<b><i><u>La composizione delle squadre di manutenzione</u></i></b><br>Qualitativa terrà conto da quanto previsto dalle procedure in materia di sicurezza (es. Mol, Mov, ecc..)<br>Quantitativa<br>1 CT coordinerà gli addetti TMI/OSMI certificandone le attività espletate.<br>1 CT e 1 TMI in caso di attività complesse.<br><b><i><u>Nucleo manutentivo</u></i></b><br>4 squadre di manutenzione di cui 4 CT e 1 TMI ogni 5 addetti.<br>Nei nuclei manutentivi IS TE LAV ricadenti nelle linee AV, Nodi e nei nuclei ritenuti strategici (vedi allegato 4), sarà prevista una 5 squadra per estendere l\'attività di manutenzione preventiva nella fascia oraria 06.00/09.00 e per assicurare una maggiore regolarità e puntualità dei servizi ferroviari. A livello territoriale si potranno individuare altre località che saranno oggetto di valutazione in sede di verifica tecnica nazionale.';
            textContainer6.innerHTML = '<b><i><u>UM Cantieri Meccanizzati</u></i></b><br>1 Responsabile RSO livello professionale Q posizione retributiva Q1.<br>1 Specialista Diagnostica figura professionale professional Q posizione retributiva Q2.<br>1 Specialista CMA figura professionale professional Q posizione retributiva Q2.<br>1 Specialista CMTE figura professionale professional Q posizione retributiva Q2 (dove presenti cantieri Meccanizzati Te).<br>2 addetti profilo professionale specialista tecnico amministrativo livello professionale B.<br>Fermo restando il numero dei nuclei individuati, vedi allegato 3, a livello territoriale sarà possibile determinare sedi alternative.<br><u><i><b>UM TELECOMUNICAZIONI (TLC)</b></i></u><br>1 Responsabile RSO livello professionale Q posizione retributiva Q1.<br>1 Specialista GSMR figura professionale professional Q posizione retributiva Q2.<br>1 Specialista IaP figura professionale professional Q posizione retributiva Q2.<br>1 Specialista cavi figura professionale professional Q posizione retributiva Q2<br>2 addetti profilo professionale specialista tecnico amministrativo livello professionale B<br>Fermo restando il numero dei nuclei individuati, vedi allegato 3, a livello territoriale sarà possibile determinare sedi alternative.<br><b><i><u>UNITÀ MANUTENTIVE SOTTOSTAZIONI ELETTRICHE LP</u></i></b><br>1 Responsabile RSO livello professionale Q posizione retributiva Q1.<br>1 Specialista infrastrutture figura professionale professional Q posizione retributiva Q2.<br>1 Specialista telecomando dote figura professionale professional Q posizione retributiva Q2.<br>1 ulteriore Specialista infrastrutture nelle linee AV figura professionale professional Q posizione retributiva Q2.<br>2 addetti profilo professionale specialista tecnico amministrativo livello professionale B.<br>Fermo restando il numero dei nuclei individuati, vedi allegato 3, a livello territoriale sarà possibile determinere sedi alternative.<br><b><u><i>GESTIONE ESERCIZIO</i></u></b><br>1 Responsabile RSO livello professionale Q posizione retributiva Q1.<br>1 Specialista analista esercizio territoriale figura professionale professional Q posizione retributiva Q2<br>1 Specialista gestione esercizio figura professionale professional Q posizione retributiva Q2.<br>2 addetti profilo professionale specialista tecnico amministrativo livello professionale B.<br> Fermo restando il numero dei nuclei individuati, vedi allegato 3, a livello territoriale sarà possibile determinare sedi alternative.';
            textContainer7.innerHTML = '<b><i><u>Composizione squadre di manutenzione TLC e SSE/LP</u></i></b><br>Qualitativa terrà conto da quanto previsto dalle procedure in materia di sicurezza (es. Mol, Mov, ecc...)<br>Quantitativa<br>1 CT coordinerà gli addetti TMI/OSMI certificandone le attività espletate.<br>1 CT e 1 TMI in caso di attività complesse.<br><b><i><u>Nucleo manutentivo</u></i></b><br>4 squadre di manutenzione di cui 4 CT e 1 TMI ogni 5 addetti.<br><b><i><u>Composizione squadre di manutenzione CMA</u></i></b><br>1 CT coordinerà 3 addetti TMI/OSMI cerificandone le attività espletate, uno degli addetti può essere in sussidio della UM lavori di giurisdizione. Nelle attività complesse che richiedono un sussidio al CT sarà presente, tra gli addetti, almeno 1 figura da TMI.<br>In ciascun NM CMA sarà presente almeno 1 squadra per mezzo e ogni 5 addetti 1 dovrà rivestire la figura da TMI.<br><b><i><u>Composizione squadre di manutenzione CMTE</u></i></b><br>Quali-quantitativa per ciascuna Autoscala/MdO TE<br>1 CT coordinerà 2 addetti TMI/OSMI certificandone le attività espletate. Nelle attività complesse che richiedono un sussidio al CT sarà presente, tra gli addetti, 1 figura da TMI.<br>In ciascun NM CMTE sarà presente almeno 1 squadra per mezzo e ogni 5 addetti 1 dovrà rivestire la figura da TMI.';
            textContainer8.innerHTML = 'Per le attività svolte su prestazione unica giornaliera le parti concordano le seguenti modalità di programmazione da contrattare territorialmente come previsto dal punto H.<br>- Per le attività interessanti prestazione nei giorni di sabato e domenica è prevista il compenso dell\'Art.36 punto 2 contratto aziendale;<br>- Attraverso la contrattazione territoriale si potrà prevedere la riduzione fino a 8 ore consecutive del riposo giornaliero tra la prestazione antimeridiana e l\'inizio della prestazione notturna.<br>- 1° e 2° notte, tra due riposi settimanali, un riposo giornaliero tra le due prestazioni di almeno 8 ore consecutive, la somma delle due prestazioni sarà considerata equivalente a 15 ore 12 min, verrà riconosciuta la fruizione del pasto per entrambe le prestazioni.<br>- 3° notte, tra due riposi, un riposo giornaliero tra le due prestazioni di almeno 9 ore consecutive, la somma delle due prestazioni sarà considerata equivalente a 15 ore 12 min, verrà riconosciuta la fruizione del pasto per entrambe le prestazioni.<br>- L\'orario della prestazione antimeridiana non potrà essere fissata prima delle ore 07.00.<br>- L\'orario della prestazione notturna potrà essere stabilito tra le 21.00 e le 23.00 con una durata di 7 ore 36 min.<br>- L\'orario della prestazione pomeridiana comprende la fascia 18.00-21.00 e deve terminare entro le 22.00.<br>- Nei nuclei dove è prevista la 5° squadra l\'orario dovrà comprendere la fascia oraria 06.00-09.00.<br>- L\'articolazione oraria programmata nel mese dovrà prevedere che il riposo minimo settimanale sia di almeno: una settimana sabato e domenica libere da prestazione giornaliera, in un\'altra intera giornata di domenica libera da prestazione giornaliera.<br>- Su un periodo di programmazione di 4 settimane (5 settimane nel caso sia presente la 5° squadra), la media dovrà essere di 38 ore.<br>Nel periodo di programmazione se oltre ad almeno 6 prestazioni pomeridiane sono previste fino a 5 prestazioni caratterizzate da un orario notturno, al personale verrà riconosciuta una specifica indennità giornaliera pari a <b>€ 4,00</b> per ogni giornata di lavoro effettivamente prestata nel periodo di programmazione, con almeno 6 prestazioni caratterizzate da un orario notturno, al personale verrà riconosciuta una specifica indennità giornaliera pari a <b>€ 7,50</b> per ogni giornata di lavoro effettivamente prestata nel periodo di programmazione.<br>In caso di programmazione di ulteriori prestazioni notturne verrà riconosciuta un\'ulteriore indennità dell\'importo di € 15 per la 7° notte, € 18 per la 8° notte, € 20 per la 9° notte.';
            textContainer9.innerHTML = 'In ogni unità produttiva l\'informativa dei piani di attività annuali, per ciascuna unità territoriale, riguarderà gli spazi manutentivi disponibili in programmazione, le fasce orarie/giornaliere di cui necessita il presidio manutentivo, l\'evoluzione dei piani formativi, con riferimento all\'apprendimento sul campo/training on the job.<br>In tale contesto le parti negozieranno quanto previsto in materia di orario di lavoro art.27 CCNL mobilità/Area AF. Le parti, attraverso la contrattazione territoriale, potranno confermare la tradizionale articolazione dell\'orario di lavoro giornaliero su prestazione unica giornaliera e potranno concordare un\'articolazione degli orari con le modalità di programmazione previste dal punto G.<br>A livello di unità produttiva, sulla base dei piani di attività quadrimestrali, potranno negoziare eventuali variazioni. Nell\'ambito delle periodiche riunioni territoriali della sede permanente di incontro sulle tematiche ricondicibili alla formazione e alla sicurezza del lavoro, sarà constantemente attenzionata l\'evoluzione del percorso formativo.';
            textContainer10.innerHTML = 'Il turno di reperibilità interesserà la squadra che effettua la prestazione pomeridiana e non è interessata da prestazioni notturne, laddove possibile, il giorno di riposo settimanale è escluso dal turno di reperibilità.<br>Il riposo minimo giornaliero del personale reperibile è fissato in 8 ore consecutive e la prestazione pomeridiana, ove prevista, dovrà terminare entro le 22.00. Se la prestazione così fornita è comunque inferiore alla durata della normale prestazione giornaliera la stessa sarà considerata effettuata nella sua interezza.<br>Nel caso di intervento pari o superiore a 2 ore 30 min effettuato tra le 00.00 e le 05.00, il lavoratore ha la facoltà di non presentarsi in servizio per l\'intera giornata solare e verrà considerato in servizio per tutta la normale prestazione interessante quella giornata.';
            textContainer11.innerHTML = 'Mobilità.<br>Prima della fase assunzionale, in proporzione al numero degli stessi e tenendo conto delle esigenze di servizio, la società darà seguito ad un numero di domande di trasferimento prodotte verso le località individuate e i settori specialistici dell\'ambito territoriale oggetto di assunzioni, dando priorità a quelle prodotte da lavoratori già in forza presso la sede dell\'unità produttiva. Stessa modalità sarà adottata prioritariamente ai percorsi di sviluppo professionale fino al livello B.<br>In presenza di spostamenti durante l\'orario di lavoro, il trattamento di tutti i lavoratori interessati da queste attività osserverà quanto stabilito dalle vigenti norme contrattuali anche in relazione al lavoro straordinario.<br>Per le parti non modificate restano confermati gli accordi nazionali precedentemente sottoscritti.';
            textContainer12.innerHTML = '<li>Art.36 contratto aziendale punto 2 6° giorno € 24.<li>Art.36 contratto aziendale punto 2 7° giorno € 34.<li>Art.76 CCNL punto 1 indennità domenicale € 20.<li>Art.33 contratto aziendale cantiere notturno € 12.<li>Art.36 punto 1 indennità diverse (prestazione unica o con intervallo fino ad 1 ora) € 1 per ogni giornata di presenza.<li>Art.79 reperibilità CCNL Punto 5.1 € 14 giornate lavorative € 32 giornate di riposo.<li>Indennità accordo nazionale con fino a 5 prestazioni da un orario notturno € 4 a presenza nel periodo di programmazione.<li>Indennità accordo nazionale con 6 prestazioni da un orario notturno € 7.50 a presenza nel periodo di programmazione.<li>7° notte nel mese € 15 aggiuntive.<li>8° notte nel mese € 18 aggiuntive.<li>9° notte nel mese € 20 aggiuntive.';
        }
    }

    
    window.addEventListener('resize', updateText);

    
    updateText();
});
