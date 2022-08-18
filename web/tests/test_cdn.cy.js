const EXPECTED_OUTPUTS = {
	"bcftools/examples/1.10.html": [`1:3106154	CAAA	C\n1:3157410	GA	G\n1:3162006	GAA	G\n1:3184885	TAAAA	TA,T\n2:3199812	G	GTT,GT\n3:3212016	CTT	C,CT`],
	"bedtools/examples/v2.29.2.html": [`chr1	100	101	a2	2	-\nchr1	100	110	a2	2	-`],
	"bhtsne/examples/1a62a5d.html": [`7:fetal_quiescent:SRR1975007	1.96387	-11.0987\n7:fetal_quiescent:SRR1975008	1.34456	-7.89475\n7:fetal_quiescent:SRR1975006	3.18859	-11.1611\n7:fetal_quiescent:SRR1975005	1.34451	-10.9631\n7:fetal_quiescent:SRR1975004	0.529135	-11.9284\n7:fetal_quiescent:SRR1975003	2.31551	-9.75737\n7:fetal_quiescent:SRR1975001	1.21204	-7.52661\n7:fetal_quiescent:SRR1975002	1.2628	-7.44581\n7:fetal_quiescent:SRR1974999	0.552494	-6.95961\n7:fetal_quiescent:SRR1975000	1.41867	-13.9248\n7:fetal_quiescent:SRR1974998	0.2619	-14.1252\n8:fetal_replicating:SRR1974997	1.05721	-4.03209\n7:fetal_quiescent:SRR1974995	1.21776	-10.9576\n7:fetal_quiescent:SRR1974996	1.9174	-13.9027\n7:fetal_quiescent:SRR1974994	2.84679	-11.6603\n7:fetal_quiescent:SRR1974993	-0.468203	-10.5416\n7:fetal_quiescent:SRR1974992	1.53824	-10.4137\n7:fetal_quiescent:SRR1974990	2.24825	-12.274\n8:fetal_replicating:SRR1974989	6.43247	-5.0738`],
	"bowtie2/examples/v2.4.2.html": [`@HD	VN:1.0	SO:unsorted\n@SQ	SN:gi|9626243|ref|NC_001416.1|	LN:48502\n@PG	ID:bowtie2	PN:bowtie2	VN:2.4.2	CL:"bowtie2-align-s -x /bowtie2/example/index/lambda_virus -U /bowtie2/example/reads/reads_1.fq"\nr1	0	gi|9626243|ref|NC_001416.1|	18401	42	122M	*	0	0	TGAATGCGAACTCCGGGACGCTCAGTAATGTGACGATAGCTGAAAACTGTACGATAAACNGTACGCTGAGGGCAGAAAAAATCGTCGGGGACATTNTAAAGGCGGCGAGCGCGGCTTTTCCG	+"@6<:27(F&5)9)"B:%B+A-%5A?2$HCB0B+0=D<7E/<.03#!.F77@6B==?C"7>;))%;,3-$.A06+<-1/@@?,26">=?*@'0;$:;??G+:#+(A?9+10!8!?()?7C>	AS:i:-5	XN:i:0	XM:i:3	XO:i:0	XG:i:0	NM:i:3	MD:Z:59G13G21G26	YT:Z:UU\nr2	0	gi|9626243|ref|NC_001416.1|	8886	42	275M	*	0	0	NTTNTGATGCGGGCTTGTGGAGTTCAGCCGATCTGACTTATGTCATTACCTATGAAATGTGAGGACGCTATGCCTGTACCAAATCCTACAATGCCGGTGAAAGGTGCCGGGATCACCCTGTGGGTTTATAAGGGGATCGGTGACCCCTACGCGAATCCGCTTTCAGACGTTGACTGGTCGCGTCTGGCAAAAGTTAAAGACCTGACGCCCGGCGAACTGACCGCTGAGNCCTATGACGACAGCTATCTCGATGATGAAGATGCAGACTGGACTGC	(#!!'+!$""%+(+)'%)%!+!(&++)''"#"#&#"!'!("%'""("+&%$%*%%#$%#%#!)*'(#")(($&$'&%+&#%*)*#*%*')(%+!%%*"$%"#+)$&&+)&)*+!"*)!*!("&&"*#+"&"'(%)*("'!$*!!%$&&&$!!&&"(*"$&"#&!$%'%"#)$#+%*+)!&*)+(""#!)!%*#"*)*')&")($+*%%)!*)!('(%""+%"$##"#+(('!*(($*'!"*('"+)&%#&$+('**$$&+*&!#%)')'(+(!%+	AS:i:-14	XN:i:0	XM:i:8	XO:i:0	XG:i:0	NM:i:8	MD:Z:0A0C0G0A108C23G9T81T46	YT:Z:UU\nr3	16	gi|9626243|ref|NC_001416.1|	11599	42	338M	*	0	0	GGGCGCGTTACTGGGATGATCGTGAAAAGGCCCGTCTTGCGCTTGAAGCCGCCCGAAAGAAGGCTGAGCAGCAGACTCAAGAGGAGAAAAATGCGCAGCAGCGGAGCGATACCGAAGCGTCACGGCTGAAATATACCGAAGAGGCGCAGAAGGCTNACGAACGGCTGCAGACGCCGCTGCAGAAATATACCGCCCGTCAGGAAGAACTGANCAAGGCACNGAAAGACGGGAAAATCCTGCAGGCGGATTACAACACGCTGATGGCGGCGGCGAAAAAGGATTATGAAGCGACGCTGTAAAAGCCGAAACAGTCCAGCGTGAAGGTGTCTGCGGGCGAT	7F$%6=$:9B@/F'>=?!D?@0(:A*)7/>9C>6#1<6:C(.CC;#.;>;2'$4D:?&B!>689?(0(G7+0=@37F)GG=>?958.D2E04CB>D-="C'B080E'5BH"77':"@70#4%A5=6.2/1>;9"&-H6)=$/0;5E:<8G!@::1?2DC7C*;@*#.1C0.D>H/20,!"C-#,6@%<+:?5"2?:G,F"D0B8D-6$65D.C&7=F$,+#6!))43C,5/5+)?-/0>/D3=-,2/+.1?@->;)00!'3!7BH$G)HG+ADC'#-9F)7<7"$?&.>0)@5;4,!0-#C!15CF8&HB+B==H>7,/)C5)5*+(F5A%D,EA<(>G9E0>7&/E?4%;#'92)<5+@7:A.(BG@BG86@.G	AS:i:-1	XN:i:0	XM:i:1	XO:i:0	XG:i:0	NM:i:1	MD:Z:77C106	YT:Z:UU\nr5	0	gi|9626243|ref|NC_001416.1|	48010	42	138M	*	0	0	GTCAGGAAAGTGGTAAAACTGCAACTCAATTACTGCAATGCCCTCGTAATTAAGTGAATTTACAATATCGTCCTGTTCGGAGGGAAGAACGCGGGATGTTCATTCTTCATCACTTTTAATTGATGTATATGCTCTCTT	9''%('FDFEG?)5.!)"AGADB3?6(@H(:B<>6!>;>6>G,."?%	AS:i:0	XN:i:0	XM:i:0	XO:i:0	XG:i:0	NM:i:0	MD:Z:138	YT:Z:UU\nr6	16	gi|9626243|ref|NC_001416.1|	41607	42	72M2D119M	*	0	0	TCGATTTGCAAATACCGGAACATCTCGGTAACTGCATATTCTGCATTAAAAAATCAACGCAAAAAATCGGACGCCTGCAAAGATGAGGAGGGATTGCAGCGTGTTTTTAATGAGGTCATCACGGGATNCCATGTGCGTGACGGNCATCGGGAAACGCCAAAGGAGATTATGTACCGAGGAAGAATGTCGCT	1H#G;H"$E*E#&"*)2%66?=9/9'=;4)4/>@%+5#@#$4A*!9'B=7(3H/B:+A:8%1-+#(E%&$$&14"76D?>7(&20H5%*&CF8!G5B+A4F$7(:"'?0$?G+$)B-?2<02,AAH@&"%B)*5*23B/,)90.B@%=FE,E063C9?,:26$-0:,.,1849'4.;F>FA;76+5&$	AS:i:-6	XN:i:0	XM:i:2	XO:i:0	XG:i:0	NM:i:2	MD:Z:98G21C22	YT:Z:UU\nr8	0	gi|9626243|ref|NC_001416.1|	46678	42	98M	*	0	0	NTGAACAGTAAACGTCTGTTGAGCACATCCTTTAATAAGCAGGGCCAGCGCAGTATCNAGTAGCATATTTTTCATGGTGTTATTCCCGATGCTTTTTG	&D8,..!5D";.=4'3:60A#F&DF!2!G9H7D!8<&',*1.,H!103=$>6?@	AS:i:-2	XN:i:0	XM:i:2	XO:i:0	XG:i:0	NM:i:2	MD:Z:39A11C3	YT:Z:UU\nr10	0	gi|9626243|ref|NC_001416.1|	3326	42	104M	*	0	0	TTTTCCGGACACAGTTCCGGATGGTCAGCCCGAAGCACATCAGCAACCCGAACAATACCGGCGACAGCCGGAACTGCCGTTCCGGTGTGCAGATTAATGACAGC	%/>%FA%+"G&5?0(/$34"CG)*E,-4GA5;@")%G<78E#5,'D$6:-11#!8H/B<9B+**6BG,!C7=)5H,H4BD6!50E&*ED@9<61;:$1D178E((C/?2,A3<3=!<'$)*1?G(EF&78'(F6*B>1:;/BE)8A$?'7,&:;G=';2%.-<9+60EC"<,$'@7C#H6*.(D5%2%(406)?H#%3.4$"F4%B*;*:	AS:i:-4	XN:i:0	XM:i:2	XO:i:0	XG:i:0	NM:i:2	MD:Z:135T32T6	YT:Z:UU\nr13	0	gi|9626243|ref|NC_001416.1|	39584	42	68M	*	0	0	GAAAAACATCGCCGCACAGATGGTTAACTTTGACCGTGAGCAGATGCGTCGGNTCGGCAACAACATGC	(.=3$#)??5+G"G"5=G*<"#+H7.6:/1H4>E"#FA*(4C=8:G;-D&,&&H+('1$40E@-4:E2	AS:i:-3	XN:i:0	XM:i:2	XO:i:0	XG:i:0	NM:i:2	MD:Z:52A3C11	YT:Z:UU\nr14	16	gi|9626243|ref|NC_001416.1|	15474	42	108M	*	0	0	GGGCGGTTTTGTCATATATGGAGCGTGAGGAATGGGTAAAGGAAGCAGTAAGGGGCATACCCCGCGCGAAGNGAAGGACAACCTGAAGTCCACGCAGTTGCTGANTNA	+)*"($$'!!'+*!*'&!%!"+*)'+'"&#$))#!##%$&%%)"&+"#'"&#*)!$#%&)"*%++)&%)#'#*&%()"+&+$(+'%)&$'+')**!$%(#+'&+!"!$	AS:i:-7	XN:i:0	XM:i:5	XO:i:0	XG:i:0	NM:i:5	MD:Z:15T55C32G1G0T0	YT:Z:UU\nr15	0	gi|9626243|ref|NC_001416.1|	40884	42	171M	*	0	0	AAGCAGCAGGATGTTGNTCCTAACCTTGCCGGGAATGGCTTTGTGGTAATAGGCCAGTCAACCAGCAGGATGCGTGTAGGCGAATATGCGGAGCTATTAGAGCTTATACAGGCATTCGGTACAGAGCGTGGCGTTAAGTGGTCAGACGAAGCGAGACTGGCTCTGGAGTGG	H5,5,(.G6D@*)!,>=*#0%$-!0D?<1#>"<9&A*0*D'$&#+3G1:80$++9DHH!C=@3H8::2?/F*@$<(<5H(1&F27/(.,E-(90"@D!73@D%"1D$G-04F#B5@<2!"2AAD%.&;!-D&;0B)0.@58*"<+5D,C'E?@B$!-%1	AS:i:-2	XN:i:0	XM:i:2	XO:i:0	XG:i:0	NM:i:2	MD:Z:64G146G2	YT:Z:UU\nr17	0	gi|9626243|ref|NC_001416.1|	29683	40	83M	*	0	0	TTCNNNTAAANGCANTCAGCAACGNTTATGTAAAGAAACAGTAAGATAATACTCAACCCGATGTTTGAGTACGGTCATCATCT	%*'"!!((#*%*%!##**)*&)#("$"(+$%)")&(!)+)#"*%)!&&$()$%&**!*(&$)()'$'&+)***+(#%&&%#(!	AS:i:-12	XN:i:0	XM:i:9	XO:i:0	XG:i:0	NM:i:9	MD:Z:3A0G0C4C1G0T0A7T1T58	YT:Z:UU\nr18	16	gi|9626243|ref|NC_001416.1|	5567	42	80M	*	0	0	CCCGGTATGACCGTGAAAACGGCCCGCCGCATTCTGGCCGCAGCACCACAGAGTGCACAGGCGCGCAGTGACACTGCGCT	8"-!;,DG+97C6,!*3E8CC'(EH?CB$#3F;4789<577+-E394*G6@?3/)$H?5.+4.=+';(D@B&@,19A!+-	AS:i:0	XN:i:0	XM:i:0	XO:i:0	XG:i:0	NM:i:0	MD:Z:80	YT:Z:UU\nr19	0	gi|9626243|ref|NC_001416.1|	42447	42	173M	*	0	0	CGAAGACGATGTAAAAANGATGAATGCCGGGNATGGTTTCACCCTGCATTCGCTAATCAGTGGTGGTGCTCTCCAGAGTGTGGAACCAAGATAGCACTCGAACGACGAAGTAAAGAACGCGAAAAAGCGGAAAAAGCAGCAGAGAAGAAACGACGACGAGAGGAGCAGAAACA	8H<)$99?G40%.0((.G$=0<4/6$H$<#HBA>3)BC2B1F#05/1"FH1?=A.0=0A99"9G';GE!G!+&<0-0B8+B,98%/*'13">G/F,G=37&CH*84,/5-F5F5AE9#!9!*('DD24/6@)%E-"3+*"1	AS:i:-2	XN:i:0	XM:i:2	XO:i:0	XG:i:0	NM:i:2	MD:Z:17C13A141	YT:Z:UU\nr20	0	gi|9626243|ref|NC_001416.1|	5207	42	211M	*	0	0	ACCGAGGCTGCAGTGTACAGCGGTCAGGAGGCCATTGATGCCGGACTGGCTGATGAACTTGTTAACAGCACCGATNCGATCACCGTCATGCGTGATGCACTGGATGCACGTAAATCCCGTCTCTCAGGAGGGCGAATGACCAAAGAGACTCAATCAACAACTGTTTCAGCCACTGCTNCGCAGGCTGACGTTACTGACGTGGTGCCAGCGA	?!AAE$&>0<7E;>+;:,#.9.@*FF??5.6G==B/0E#+!,5H:425:+D)4>=#5G7,?3BD/9B1!'+@4,BD#G,"B+@@-:2($0*-!*(.9%;'0D%G-'"<5(A63$8@G;*$1E$'<::+?7C:#+..3H?H>4:.;D76G8D)#$9"@>4#"?+"D6/0-(.2/G!5F6'@G4-$(<.D$/@%%="%3B!!8&?0%+-=C);CA/;%+46G4!=,7D%!;H7)8-@F?#!H238$480H/A;'&.@<%3#09*513:18A-:D4C0;>D'.,6-EE4D35D5)-=0'DG)#"/*B//<:E,4-)AH.:H(D(D)$>!E7@;":&G29-<50%5@;"C0E"B<-7:%`],
	"coreutils/examples/v8.32.html": [`total 3.5K\ndrwxrwxrwx 1 0 0 4.0K Aug 18 14:30 .\ndrwxrwxrwx 1 0 0 4.0K Aug 18 14:30 ..\ndrwxrwxrwx 1 0 0 4.0K Aug 18 14:30 dev\ndrwxrwxrwx 1 0 0 4.0K Aug 18 14:30 home\ndrwxrwxrwx 1 0 0 4.0K Aug 18 14:30 proc\ndrwxrwxrwx 1 0 0 4.0K Aug 18 14:30 shared\ndrwxrwxrwx 1 0 0 4.0K Aug 18 14:30 tmp`],
	"fastp/examples/0.20.1.html": [`	"summary": {\n		"before_filtering": {\n			"total_reads":9,\n			"total_bases":1208,\n			"q20_bases":1078,\n			"q30_bases":1005,\n			"q20_rate":0.892384,\n			"q30_rate":0.831954,\n			"read1_mean_length":134,\n			"gc_content":0.354305\n		},\n		"after_filtering": {\n			"total_reads":8,\n			"total_bases":1208,\n			"q20_bases":1078,\n			"q30_bases":1005,\n			"q20_rate":0.892384,\n			"q30_rate":0.831954,\n			"read1_mean_length":151,\n			"gc_content":0.354305\n		}\n	},\n`],
	"fasttree/examples/main.html": [`(1k99_A:1.45558,2lef_A:0.86773,(1aab_:2.02358,1j46_A:0.34215)0.877:0.65120);`],
	"gawk/examples/gawk-5.1.0.html": [`column2\n2\n5\n8\nTotal of column 2 = 15`],
	"grep/examples/v3.7.html": [`good\ngreat`],
	"htslib/examples/1.10.html": [
		`Usage:   tabix [OPTIONS] [FILE] [REGION [...]]`,
		`Usage: htsfile [-chHv] FILE...`,
		`Usage:   bgzip [OPTIONS] [FILE] ...`
	],
	"ivar/examples/v1.3.1.html": [`r001	163	ref	7	30	8M4I4M1D3M	=	37	39	TTAGATAAAGAGGATACTG	*	XX:B:S,12561,2,20,112\nr002	0	ref	9	30	1S2I6M1P1I1P1I4M2I	*	0	0	AAAAGATAAGGGATAAA	*\nr003	0	ref	9	30	5H6M	*	0	0	AGCTAA	*\nr004	0	ref	16	30	6M14N1I5M	*	0	0	ATAGCTCTCAGC	*\nr003	16	ref	29	30	6H5M	*	0	0	TAGGC	*\nr001	83	ref	37	30	9M	=	7	-39	CAGCGCCAT	*`],
	"jq/examples/jq-1.6.html": [`there`],
	"kalign/examples/v3.3.1.html": [`>1aab_\nGKGDPKKPRG-KMSSYAFFVQTSREEHKKKHPDASVNFSEFSKKCSERWKTMSAKEKGKF\nEDMAKADKARYEREMKTY-IPPKGE---------\n>1j46_A\n-----MQDRV-KRPMNAFIVWSRDQRRKMALENPRMRNSEISKQLGYQWKMLTEAEKWPF\nFQEAQKLQAMHREKYPNYKYRPRRKAKMLPK---\n>1k99_A\nMKKLKKHPDFPKKPLTPYFRFFMEKRAKYAKLHPEMSNLDLTKILSKKYKELPEKKKMKY\nIQDFQREKQ-EFERNLARFREDHPDLIQNAKK--\n>2lef_A\n-----MHI---KKPLNAFMLYMKEMRANVVAESTLKESAAINQILGRRWHALSREEQAKY\nYELARKERQLHMQLYPGWSARDNYGKKKKRKREK`],
	"minimap2/examples/v2.22.html": [`@SQ	SN:MT_human	LN:16569\n@PG	ID:minimap2	PN:minimap2	VN:2.22-r1101	CL:minimap2 -a /minimap2/MT-human.fa /minimap2/MT-orang.fa\nMT_orang	0	MT_human	577	60	14M2D4M3I37M1D85M1D232M1I559M1D6M1I550M1D2M1D146M2I3M1D3M1D132M1D3M1I40M3I13M1D1M1D335M3I4M1D3M2D342M1D52M1I13M3I1M2D52M1I592M1D3M1I485M1D5M1I974M3I4M3D230M1D59M1D156M1D31M1I98M1I26M14I329M3I7M3D1203M1D4M1I70M1D345M1D9M1I398M7I8M8I1M1I9M3I2M1I2M1D390M1I5M1D193M1I6M1D195M1D7M1I1826M1D10M1I1256M1D49M1D157M3D5M3I48M2I1M1I3M3D1203M1I2M2D1M1I44M2D2M1I2M1I38M2D16M2I2079M1I5M1D50M1D3M1I43M5I57M1I54M4D19M1I39M2D8M1I7M1I22M1I5M1I4M1D5M1I2M2D29M2I20M1D13M2I1M1D8M1D45M1D15M1I5M2D17M1D56M1D2M1I131M1I38M474S	*	0	0	GTTTATGTAGCTTATTCTATCCAAAGCAATGCACTGAAAATGTCTCGACGGGCCCACACGCCCCATAAACAAATAGGTTTGGTCCTAGCCTTTCTATTAGCTCTTAGTGAGGTTACACATGCAAGCATCCCCGCCCCAGTGAGTCGCCCTCCAAGTCACTCTGACTAAGAGGAGCAAGCATCAAGCACGCAACAGCGCAGCTCAAGACGCTCAGCCTAGCCACACCCCCACGGGAGACAGCAGTGATAAGTCTTTAGCAATAAACGAAAGTTCAACTAAGCTACACTAACCCCAGGGTTGGTCAACTTCGTGCCAGCCACCGCGGTCACACGATTAGCCCAAGTTAATAGAGATCGGCGTAGAGAGTGTTTTAGATTCTTTTTCTCCCCAATAAAGCTAAAATTTACCTGAGTTGTAGAAAACTTAAGCTAATACAAAATAAACTACGAAAGTGGCTTTAATATATCTGAACACACAATAGCTAAGGCCCAAACTGGGATTAGATACCCCACTATGCTTAGCCCTAAACTTTAACAGTTAAATCAACAAAACTGCTCGCCAGAACACTACGAGCCACAGCTTAAAACTCAAAGGACCTGGCGGTGCTTCATATCCCTCTAGAGGAGCCTGTTCTGTAATCGATAAACCCCGATCAACCTCACCACCCCTTGCTCAGCCTATATACCGCCATCTTCAGCAAACCCTGATGAAGGCCACGAAGTAAGCGCAAGCATCCACATAAAGACGTTAGGTCAAGGTGTAGCCCATGGAGTGGCAAGAAATGGGCTACATTTTCTACTTCAGAAAACTACGATAGCCCTCATGAAACCTGAGGGTCGAAGGTGGATTTAGCAGTAAACTAAGAGTAGAGTGCTTAGTTGAACAGGGCCCTGAAGCGCGTACACACCGCCCGTCACCCTCTTCAAGTATATTTCAGGGACTACCTAACTAAAACCCCCACGCATCTATATAGAGGAGGCAAGTCGTAACATGGTAAGCGTACTGGAAAGTGCGCTTGGACGAACCAGAGGGTAGCTTAACACAAAGCACCCGGCTTACACCTGGGAGATTTCAATTCAACCTGGCCCCTCTGAGCTAACCCTAGCCCCAAACCCAACCCACCCTACTACCAACCAACCCTAACCAAACCATTCACCCAAACAAAGTATAGGCGATAGAAATTACAATCCGGCGCAATAGACACAGTACCGTAAGGGAAAGATGAAAAAACACAACCAAGCACAACATAGCAAGGACTAACCCCTGTACCTTTTGCATAATGAATTAACTAGAAACAACTTTGCAAGGAGAGCCAAAGCCAAGACCCCCGAAACCAGACGAGCTACCCATAAACAGCTAAAAGAGCACACCCGTCTATGTAGCAAAATAGTGGGAAGATTTATGGGTAGAGGCGACAAACCTACCGAGCCTGGTGATAGCTGGTTGTCCAAGACAGAATCTTAGTTCAACTTTAAATTTACTTACAGAACCCCTAATCCCCTCGTAAATTTAATTGCTAGTCTAAAGAGGAACAGCTCTTTAGACACTAGGAAAAAACCTTAAAAAGAGAGTAAAAAACACAACACCCATAGTGGGCCCAAAAGCAGCCATCAATTAAGAAAGCGTTCAAGCTCGACACCTAAACACCAAAAAATACCAAACACAAAACTGAACTCCTTACTCCCCATTGGACTAATCTATTGCCCCATAGAAGAAACAATGTTAGTATAAGTAACATGAAGATATTCTCCCCCGCATAAGTCTACGTCAGACCGAAACATCACACTGACAATTAACGGTCCAATATGCATAGTTAACAAATAAACTATTATTTTTTCCCCCCGTTAATCCAACACAGGCATGCCTATAAGGAAAGGTTAAAAAAAGTAAAAGGAACTCGGCAAATCTCACCCCGCCTGTTTACCAAAAACATCACCTCTAGCATTACCAGTATTAGAGGCACCGCCTGCCCGGTGACATACGTTTAACGGCCGCGGTACCCTGACCGTGCAAAGGTAGCATAATCACTTGTTCCTTAAATGGGGACTTGTATGAATGGCTTCACGAGGGTTCGACTGTCTCTTACTTTTAACCAGTGAAATTGACCTGCCCGTGAAGAGGCGGGCATAACATAACAAGACGAGAAGACCCTATGGAGCTTCAATTTACCAGTGCAAATAACATACAACAAGCCCACAGGCCCTAAATCACCAAACCTGCACTGAAGATTTCGGTTGGGGCGACCTCGGAGCACAACCCAACCTCCGAGAAACACATGTTAAGACCTCACAAGTCAAAACGAACTTCCACACACAATTGATCCAACAACTTGACCAACGGAACAAGTTACCCTAGGGATAACAGCGCAATCCTGTTCTAGAGTCCATATCAACAACAGGGTTTACGACCTCGATGTTGGATCAGGACATCCTAATGGTGCAGCCGCTATTAAAGGTTCGTTTGTTCAACGATTAAAGTCCTACGTGATCTGAGTTCAGACCGGAGCAATCCAGGTCGGTTTCTATCTATTTCACATTTCTCCCTGTACGAAAGGACAAGAGAAATGGGGCCTACTTCACATAAGCGCCTTTCCCAAACAAATGATATCATCTCAATTTAACACCACACCAACACCCACCCAAGAAAAGGGCTATGTTAAGATGGCAGAGCCCGGTAACTGCATAAAATTTAAAGCTTTACAGTCAGAGGTTCAACTCCTCTTCTTAACAATATGCCCATAATCAACCTCCTACTCCTCATTATATCCATCCTAATCGCCATAGCATTTCTAATGCTAACCGAACGAAAAATCCTAGGCCACACACAACTACGCAAAGGGCCCAACATTGTGGGCCCCTACGGCTTACTACAACCCTTTGCCGACGCCCTAAAACTATTCACCAAAGAACCCCTAAAACCCTCCACATCAACCATCACCCTTTACATTATTTCCCCCGCCCTAGCCCTTACCATTGCCCTCCTACTATGAACCCCCCTCCCTATGCCCATCCCCCTAATCAACCTCAACTTAGGCCTCCTATTTATCCTAGCCGCGTCAAGCCTAACCGTCTACTCCATCCTCTGATCAGGATGAGCATCTAACTCAAACTACGCCCTAATCGGCGCATTGCGGGCGGTAGCCCAAACGATCTCATACGAAATTACCCTAGCCCTTATCCTGTTATCAGTACTACTAATAAGCGGCTCTTTTAACCTCTCCGCCCTCATCACAACACAAGAACACTCATGACTACTTCTACCATCATGACCTCTAGCCCTAATATGATTTATTTCAACACTAGCAGAAACCAACCGAGCCCCCTTCGACCTCACCGAAGGAGAATCCGAACTAGTTTCGGGCTTTAACACTGAATACGCCGCAGGTCCATTCGCCCTATTCTTCATAGCCGAATATACAAACATTATCTTAATAAACGCCCTCACCACTATAATTTTCCTAGGAACAACATTCAACATCCACTCCCCAGAACTCTACACAACCCTCTTCACCATCAAAACCCTACTCCTAACCTCCCTATTCCTATGAATTCGATCAACATACCCCCGATTCCGCTACGACCAACTCATGCACCTTCTATGAAAAAATTTCCTGCCACTCACCCTAGCACTACTAATATGACACATCTCCGTACCCATTGCAACCTCCGGCATTCCCCCACAAACCTAAGAAATATGTCTGACAAAAGAGTTACTTTGATAGAGTAAAAAATAGAGGTCTAAATCCCCTTATTTCTAGGATTATGGGAGTTGAACCCACCCCTGAGAATCCAAAATTCTCCGTGCCACCCATCACACCCTATCCTAAAGTAAGGTCAGCTAAATAAGCTATCGGGCCCATACCCCGAAAATGTTGGTTATACCCTTCCCGTACTAATTAACCCCTTGGCCCAACCCATCATTTACCCCACCATCTTCACAGGCACGCTCATTACAGCACTGAGCTCCCACTGATTCTTTGCCTGACTGGGACTAGAAATAAATATACTCGCTTTCATCCCAGTCCTAACCAAAAAAACAAGCCCCCGCTCCACAGAAGCCGCCATTAAATATTTCCTCACACAGGCAACCGCATCCATAATCCTCCTGATAGCCATCCTCTACAACAACATACTTTCCGGACAGTGAACCACAACCAACACCACCAACCCATATTCATCTCTAATAATCGTAACCGCCCTAGCAATGAAGCTAGGAATAGCCCCCTTCCACTTTTGAGTCCCAGAAGTCACCCAAGGAGTCCCCCTGACATCCGGCTTACTCCTCCTTACATGACAAAAATTAGCCCCCATTTCAATTATATACCAAATATCTTCATCGGTAGACACAAACATCCTCCTCACCCTCTCAATTCTATCTATCCTAGTAGGCGGCTGAGGCGGACTAAACCAAACCCAACTACGCAAAATCCTGGCATACTCCTCAATCACCCATATAGGATGAATAATAGCAGTACTACCATATAACCCAGACATCACTATCCTCAACCTAATCATCTACATCATCCTGACAACTACCGCATTCCTAATCCTCGACTTAAACTCTAGTGTCACAATCCTAATATTAACCCGCACCTGGAACAAGCTGACATGACTAATACCCTTAATCCCATCAACCTTATTATCCCTAGGGGGCCTGCCACCACTAACCGGCTTCCTGCCCAAATGAGCCATCATTGAAGAATTTGCAAAAAATGGCAATCTCATTACCCCCACAATCATGGCTATTATCACCCTCCTCAACCTCTACTTCTACGTACGCCTAATCTACGCCACCTCAATCACACTACTCCCCATATCTAACAACGCAAAAATGAAATGACAGTTCGAAAACACAAAACCCACCCCTCTTCTCCCCACACTCACCATTCTTACCACCCTACTCCTACCTATCTCCCCTCTCATCCTATCTATCTCATAGAAATTTAGGTTAACACAGACCAAGAGCCTTCAAAGCCCTCAGCAAGTCACAGCACTTAATTTCTGTAACACTAAGGACTGCAAAGCCCCGCTCTGCATCAACTGAACGCAAACCAGCCACTTTAATTAAGCTAAGCCCTCCCTAGACCGATGGGACTTAAACCCACAAACATTTAGTTAACAGCTAAACACCCTAATCAATTGGCTTCAGTCCACTTCTCCCGCCGCGGGGAAAAAGGCGGGAGAAGCCCCGGCAGGCCTTAAAGCTGCTCCTTCGAATTTGCAATTCAACATGACAATCACCTCGGGGCTGGTAAAAAGAGGTCTAACCCCTGTTCTTAGATTTACAGCCTAATGCCTTAACTCGGCCATTTTACCCCCCCCCCCCCTTTTTTTCTCCACTAATGTTCGCCGACCGCTGGCTATTCTCCACGAACCACAAAGACATCGGGACACTATACCTGTTATTCGGCGCATGGGCTGGAGTCCTAGGCACTGCCCTAAGCCTCCTCATTCGAGCTGAACTGGGCCAACCCGGCAACCTTCTAGGCAATGACCATATCTACAATGTCATCGTCACAGCTCATGCATTCGTAATAATTTTCTTTATAGTCATACCCATTATAATTGGAGGCTTTGGCAACTGACTAGTGCCCCTAATAATCGGCGCCCCCGATATAGCATTCCCGCGCATAAATAATATAAGCTTCTGACTCCTCCCCCCCTCCTTTCTCCTACTGCTCGCTTCTGCTACAGTAGAGGCTGGCGCAGGAACAGGCTGAACAGTCTATCCGCCCCTAGCAGGAAACTACTCTCACCCAGGAGCCTCTGTAGACTTAACAATCTTCTCTTTACACCTAGCAGGCATTTCCTCTATCCTAGGAGCTATCAATTTCATCACAACAATTATTAATATAAAACCCCCTGCAATATCCCAATACCAAACCCCCCTCTTCGTCTGATCAGTCTTGATCACAGCAGTCCTACTTCTCCTTTCCCTCCCAGTCCTAGCCGCTGGCATCACCATACTACTAACAGATCGCAACCTAAACACCACATTCTTTGACCCAGCCGGAGGTGGAGATCCCATCCTATATCAGCACCTATTCTGATTTTTTGGCCACCCTGAAGTCTACATTCTCATCCTGCCGGGTTTCGGCATAATCTCCCACATCGTAACACACTATTCCGGAAAAGAAGAGCCATTTGGGTACATAGGCATAGTCTGAGCCATAGTCTCAATTGGCTTCCTGGGCTTTATCGTATGGGCCCACCACATATTCACAGTAGGAATAGACGTGGACACACGAGCCTACTTCACCTCCGCTACCATAATCATTGCCATCCCCACCGGCGTCAAAGTATTTAGCTGACTCGCTACACTCCACGGAAGCAACACTAAATGATCTGCCGCAATCCTCTGAGCCTTAGGATTCATTTTCCTCTTCACCGTAGGCGGCCTAACAGGCATCGTACTAGCAAACTCATCACTAGACATTGTATTACACGATACATACTACGTTGTAGCCCACTTTCATTACGTCCTATCAATAGGAGCTGTATTCGCCATCATGGGAGGCTTCATCCACTGGTTCCCACTATTCTCAGGCTACACCTTAGACCAGACCTATGCTAAAATTCACTTCATCACCATATTTATCGGCGTAAATTTAACTTTCTTCCCACAACATTTCCTCGGCCTGTCAGGCATACCCCGACGCTACTCCGACTACCCCGACGCGTACACCACCTGAAATATTTTATCATCCGCAGGCTCATTTATCTCCCTAACAGCAGTCATACTAATAATTTTCATAATTTGAGAAGCCTTCGCCTCAAAACGAAAAGTCCCAATAGTTGAACAACCCTCCACAAGCCTAGAGTGATTGTACGGATGCCCCCCACCCTACCACACATTTGAAGAACCCGTCTATATAAAACCAGAACAAAAAAGGAAGGAATCGAACCTCCTAAAGCTGGTTTCAAGCCAACCCCACAACCTCCATGACTTTTTCAAGAGATACTAGAAAAACCATTTCATGACTTTGTCAAAGTTAAGTTACAGGCCAAACCCTGTGTATCTTAATGGCGCACGCAGCACAGGTAGGTTTACAAGACGCTACCTCTCCTATCATAGAAGAATTGGTCATCTTTCACGACCACGCCCTCATAATCATTTTCCTAATCTGCTTCCTAGTCCTGTACGCCCTATTCCTAACACTCACAACAAAACTCACCAACACCAGCATCTCAGACGCCCAAGAGATAGAGACTATTTGAACTATCCTACCGGCCATCATCCTAATTCTAATCGCCCTCCCATCCCTACGCATCCTCTACTTAACAGACGAGATCAACGACCCTTCCTTCACCATCAAATCAATCGGTCATCAATGATACTGAACCTACGAGTACACTGACTACGGTGGATTGATCTTCAACTCTTACATGCTCCCACCACTATTCCTAGAACCAGGCGACCTTCGACTCCTCGACGTCGACAACCGAGTAGTCCTCCCAGTCGAAGCTCCCGTTCGCATAATAATCACATCCCAAGACGTCTTACACTCATGAACTGTACCCTCACTAGGCCTGAAAACGGACGCAATCCCCGGACGCCTAAACCAAACCACATTCACTGCCACGCGACCAGGAGTGTACTATGGCCAATGCTCAGAAATCTGTGGAGCTAACCACAGCTTTATGCCTATCGTCCTAGAACTAATCCCCCTAAAAATCTTCGAAATAGGGCCCGTATTCACTTTATAACTTCCCCCACCCCCACAACCCATCCTACCCCCTTTCCTGAGGCCCACTGCAAAGCTAATCTAGCATTAACCTTTTAAGTTAAAGACTAAGAGAATCAACCCCTCTTTGCAGTGAAATGCCCCAACTAAATACCACCACATGGCCCACCATCATCACCCCAATACTCCTTGCACTATTCCTCATCACTCAACTAAAACTACTAAACTCACACCTCCACCCACCCACCCCACCAAAATTCACTAAACCAAAACTCCACGCCAAACCCTGAGGACCAAAATGAACGAAAGTCTATTTACCCCATTCATTACCCCCACAGTACTAGGCCTCCCCGCCGCAGTACTAGTCATCTTATTTCCCCCCTTACTGATCCCCACCTCCAAACATCTCATCAACAACCGACTAATTATTATCCAACAATGACTAATCCGACTCATCCTAAAACAAATAATAACCACCCATAACGCTAAAGGACGAACTTGATCCCTCATACTAACGTCCCTAATCATTTTCATCGCCTCAACCAACCTCCTAGGACTCCTCCCCTACTCATTTACACCAACCACCCAACTATCCATAAATTTAGCTATAGCAATTCCCTTATGAGCAAGCACGGTAGCTATGGGCCTTCGCTTCAAAGCCAAAATTACCCTAACCCACCTCTTACCACAAGGTACCCCCACACCTCTCATCCCTATACTAATTATTATTGAAACCGTCAGCCTTTTCATTCAACCACTAGCCTTAGCCGTACGCCTAACTGCTAACATCACTGCAGGCCACCTACTCATGCACCTAATCGGAAGCTCTGCACTAGCTATACTAGCCATCAACCTCCCCCTAACCCTCATCACCCTTACAATCTTAACCCTGCTAACAATCCTGGAGACTGCCATCGCCCTAATTCAAGCCTACGTCTTCACACTTCTAGTAAGCCTCTACCTGCACGACAACTCATAATGGCCCATCAATCACACGCCTACCACATAGTAAAACCTAGCCCATGACCCCTAACAGGAGCTCTCTCAGCCCTCCTAACAACATCTGGCCTAACCATGTGATTCCACTTCCACTCCACAACCCTACTATTAACAGGCCTACTAACCAATGCACTAACCATATACCAATGGTGACGAGATGTAGTGCGAGAAAGCACATACCAAGGCCACCACACACTACCCGTCCAAAAAGGCCTCCGATATGGAATAATCCTATTCATCACTTCAGAAGTCTTTTTCTTCGCCGGATTCTTCTGAGCATTCTACCACTCCAGCCTAGCCCCCACCCCTCAACTTGGAGGACACTGACCCCCAACAGGCATTATCCCCCTCAACCCCCTAGAAGTCCCACTCCTAAACACATCCGTACTACTCGCATCAGGAGTCTCAATTACCTGAGCCCATCACAGCCTGATGGAAAATAATCGAACCCAAATAATTCAAGCACTACTCATCACAATCTTACTAGGCATCTACTTCACTCTCCTTCAGGCTTCAGAATACATTGAAGCTCCTTTCACCATCTCTGACGGCATCTACGGCTCAACATTCTTCATAGCCACGGGATTCCACGGCCTCCACGTCATTATCGGATCAACTTTCCTCACTGTATGCCTAGCCCGCCAGCTATTATTCCACTTCACATCCAAACATCACTTTGGCTTTGAGGCCGCCGCCTGATACTGGCACTTTGTAGACGTAGTCTGACTGTTTCTGTACGTCTCCATCTACTGATGAGGTTCCTACTCTTTTAGTATAAACAGTACCGTTAACTTCCAATTAACTAGTTTTGACAACGCCCAAAAAAGAGTAATTAACTTCGTCCTAGCTCTAACAGTCAACACCCTCCTAGCCCTGCTACTAATAACCATCACATTCTGACTACCACAACTCTACCCCTACATAGAAAAATCCGACCCATACGAATGTGGATTTGACCCCGCATACCCCGCTCGCATTCCTTTCTCCATAAAATTTTTCTTAGTAGCCATCACCTTCCTACTATTCGACCTAGAAATCGCCCTGCTACTACCCCTGCCATGGGCCCTACAAACAACCAACTTACCACTAATAACTACATCATCACTTATATTAATTATCATCCTAGCCCTAGGCCTAACTTACGAATGATCACAAAAAGGATTAGACTGAGCCGAATTGGTAAATAGTTTAAACAAAACAAATGATTTCGACTCATTAAATTATGACAGCCATATTTACCAAATGCCCCTTATCTACATAAATATCACACTAGCATTCACCATATCACTCCTAGGCATACTAGTCTACCGCTCACACCTAATATCTTCTCTACTATGTCTAGAAGGAATAATATTATCATTGTTCATTATAATTACTCTCATAACCCTCAACACCCACTCTCTCCTAGCTAACATCATACCCATCACCATGCTAGTCTTCGCTGCCTGCGAAGCAGCAGTAGGCCTCGCCCTACTAGCCTCAATCTCCAATACATACGGCCTAGACTACGTCAACAACCTAAACCTACTTCAATGCTAAAACTAATTATCCCAACAATCATACTGCTGCCCCTAACATGACTCTCCAAAACGCACATAATCTGAATCAACACCACCACCCACAGCCTAATCATCAGCTCCATCCCCCTACTATTCCTCAATCAAACCAACAGCAACCTGTACAGCTACTCCCTTCTTTTCTCCTCCGACCCCTTATCAACCCCCCTTCTAATACTAACAACCTGACTCCTACCCCTCATAATTATAGCAAGCCAACACCATCTATCCAACGAACCCCCATCACGAAAAAAATTATACCTCACCATACTAATCTCTCTTCAAATCTCCCTAATCATAACATTCACAGCCACAGAGCTAATTATATTTTATATCCTCTTCGAAACCACTCTCATCCCCACCCTAGTCATTATCACCCGCTGAGGCAACCAGCCAGAGCGCTTAAATGCAGGCACATACTTTCTATTCTACACACTAGTAGGCTCCCTCCCCCTACTCATTGCCCTAATCCACACCTACAACACCCTAGGCTCGCTTAACATTGTATTACTAACTCTCACCGCCCGGGAGCTAACAGACTCCTGATCCAACAGCCTAATATGACTAGCGTACACAATAGCTTTCATAGTAAAAATACCCCTCTACGGACTACACCTATGACTCCCTAAAGCCCATGTAGAAGCCCCCATTGCCGGCTCAATAGTACTCGCCGCAGTGCTCTTAAAACTAGGTGGTTACGGTATAATACGCCTTATCCCCATTCTCAATCCCCTAACTAAACACATAGCCTACCCCTTTATCATACTATCCCTATGAGGCATAATCATAACAAGCTCCATCTGCTTACGACAAACCGACCTAAAATCACTCATCGCATACTCCTCAGTCAGCCACATAGCGCTTGTTGTAGCAGCTATCCTCATTCAAACCCCCTGAAGCTTCACCGGCGCAACCACCCTCATAATTGCCCATGGACTCACATCCTCCCTACTGTTCTGCCTAGCAAACTCAAACTACGAACGAACCCACAGCCGCATCATAATCCTCTCTCAAGGCCTTCAAACTCTACTCCCCCTAATAGCCCTCTGATGACTTCTAGCAAGCCTCACTAACCTTGCCCTACCACCCACCATCAACCTACTAGGAGAACTCTCCGTACTAATAGCCATATTCTCTTGATCTAACATCACCATCCTACTAACAGGACTCAACATACTAATCACAACCCTATACTCTCTCTATATATTCACCACAACACAACGAGGTACACCCACACATCACACCAACAACATAAAACCTTCTTTCACACGTGAAAACACCCTCATGCTCATACACCTATCCCCCATTCTCCTCTTGTCCCTCAACCCCAGCATCATCGCTGGATTCGCCTACTGTAAATATAGTTTAACCAAAACATCAGATTGTGAATCTAATAATAGGGCCCACAACCCCTTATTTACCGAGAAAGCTCACAAGAACTGCTAACTCTCACCCCATGTGTAACAACATGGCTTTCTCAACTTTTAAAGGATAACAGCTATCCCTTGGTCTTAGGACCCAAAAATTTTGGTGCAACTCCAAATAAAAGTAACAGCCATGTTTACCACCATAACTGCCCTCACCTTGACTTCCCTAATCCCCCCCATTACCGCTACCCTCATTAACCCCAACAAAAAAAACTCATACCCCCACTATGTAAAAACTGCCATCGCATCCGCCTTTACTATCAGCCTTATCCCAACAACAATATTTATCTGCCTAGGACAAGAAACCATCGTCACAAACTGATGCTGAACAACCACCCAGACACTACAACTCTCACTAAGCTTCAAACTTGACTACTTCTCCATAACATTCCTCCCCGTAGCACTACTCATCACTTGATCCATTATAGAATTTTCACTATGGTATATAGCCTCAGACCCAAACATCAACCAATTTCTCAAATTCCTCCTTATTTTCCTAATCACCATAATTATCCTAGTCACTGCCAATAACCTACTCCAACTCTTCATCGGCTGAGAGGGCGTAGGGATCATATCCTTCCTGCTCATTAGTTGATGATACGCCCGAACAGACGCCAACACGGCAGCTATTCAAGCAATCCTATACAATCGTATCGGCGATATTGGCTTCATCCTGGCTCTAGCATGATTCCTCCTACACTCCAACTCATGGGAACTACAACAAGTATTCCTCCTAAACAATAACCCTAACCTCCTCCCACTACTAGGACTCCTCCTAGCCGCAGCTGGCAAATCAGCCCAACTAGGCCTTCACCCCTGACTACCCTCAGCCATAGAAGGCCCAACCCCCGTCTCAGCCCTACTTCACTCAAGCACCATGGTCGTGGCTGGGGTCTTCCTACTCATCCGCTTTCACCCATTAACAGAAAACAGCCCACATATCCAAACCCTTACACTATGCTTAGGGGCCATCACCACCCTGTTCGCAGCAATCTGCGCCCTCACACAAAACGACATTAAGAAAATCGTAGCTTTCTCCACCTCAAGTCAACTAGGACTTATAATGGTCACAATTGGCATTAACCAGCCACACCTGGCACTCCTCCACATCTGCACCCACGCCTTCTTCAAAGCCCTTTTATTCATATGTTCTGGGTCCATCATCCACAACCTCAACAATGAGCAAGACATCCGAAAAATAGGAGGACTACTCAAAACCATACCCCTAACCTCAACCTCCCTCACTATCAGCAGCCTAGCCCTCGCAGGAATACCCTTCCTCTCAGGCTTCTACTCCAAAGACCTCATTATCGAGACCGCAAACATATCCTATACCAACACCTGAGCCCTGTCTATCACTCTCATCGCCACCTCCTTAACAGGCGCCTACAGCACTCGAATAATCCTCCACACCCTTACAAGCAAACCCCACTTCCCAACCCCAATCTCTATCAATGAAAACAACCCCACTCTACTTAAACCCATCAAGCGCCTTATGCTAGGAAGCCTATTCGCAGGATTCCTAATCACCAACAACATCCCCCCTATATCCCTGCCCCAAGTAACAACCCCCCCTTACCTAAAACTCGCAGCTCTAGCTGCCACCCTCCTAGGTCTCCTAGTAGCCCTAGACTTAAACTACCTAGCCAACAAACTCAAGACAAAAACCCCTCCACCCACATTCTATTTCTCCATCATACTCGGATTCTACCCTAGCATCATCCACCGCATAATCCCCCACCTAAGCCTTCTCATAAGCCAAAACTTATCCCTACTCCTACTAGACCTAACCTGACTAAAAAAACTAATACCCAAAACAATCTCACAACACCAAACCTCAGCCTCCATCACTATTTCAACCCAAAAAGGTTTAATCAAACTCTACTTCCTCTCTTTCCTCATCCCACTCCTCCTAATCCTCCTTATAATCTCATAACCTATTACCCCGAGCAATCTCAATTACAACATAAACACCAACAAATAACGTTCAACCAGTAACCACCACCAACCAACGCCCATAATCATATAAAGCCCCCGCACCAATAGGATCCTCCCGAATCAACCCCGACCCTTCCCCTTCATAAATTATCCAGCTCCCCACGCTATTAAAATTCACCACTACCACCACTCCATCATACTCTTTTACCCACAACACCAGCCCCACTTCCATCACTAATCCCACCAGAACACTCACCAATACCTCAACCCCTGACCCCCATGCCTCAGGATATTCCTCAATAGCTATTGCCGTAGTATACCCAAAAACAACCATCATACCCCCTAAATAAATTAAAAAAACCATTAAACCCATATAACCTCCCCCACAATTTAAAATAACTGCACACCCAACCGCACCACTAATAATCAACACTAAACCCCCATAAATAGGAGAGGGCTTAGAAGAAAACCCCACGAACCCTATCACTAAAATTACACTCAACAGAAACAAAGCATATGTCATTGTTCTCGCATAGACTGTGACTATGACCAATGGTATGAAAAAACATCGTTGTACCTCAACTACAAGAACACTAATGACCTCAACACGTAAAACCAACCCACTAATAAAATTAATCAACCACTCACTTATCGACCTCCCCACCCCATCAAACATCTCCGCATGATGGAACTTCGGCTCACTCCTAGGCGCCTGCTTAATCATCCAAATCACCACTGGACTATTCCTAGCTATACATTATTCACCAGACGCCTCCACTGCCTTTTCATCAATCGCCCACATCACTCGAGATGTAAACTACGGCTGAATAATTCGCCACCTCCACGCTAACGGCGCCTCAATATTCTTTATCTGCCTCTTCTTACATATCGGCCGAGGCCTATACTATGGCTCATTCACCCACCTAGAAACCTGAAACATCGGCATCATCCTACTATTTACAACTATAATAACAGCCTTCATAGGTTACGTCCTCCCATGAGGCCAAATATCCTTCTGAGGAGCCACAGTAATCACAAATCTACTGTCCGCCATCCCATACATTGGAACAGACCTGGTCCAATGAGTCTGAGGTGGCTACTCAGTAAATAGCCCCACTCTAACACGATTCTTCACCCTACACTTCATACTACCCTTCATTATTACAGCCCTAACAACTCTACACCTCTTATTCCTACACGAAACAGGATCAAATAACCCCCTGGGAATCCCCTCCCATTCCGACAAAATCACCTTCCACCCCTACTACACAATCAAAGACATCCTAGGCCTACTCCTTTTTCTCCTCGCCCTAATAACACTAACACTACTCTCACCAGACCTCCTAAGCGACCCAGACAACTACACCTTAGCTAACCCCCTAAGCACCCCACCCCACATTAAACCCGAATGATATTTCCTATTCGCCTACGCAATCCTACGATCCGTCCCCAACAAACTAGGAGGTGTAATAGCCCTCATACTATCCATCCTAATCCTAACAACAATCCCTGCCCTTCACATGTCCAAGCAACAGAGCATAACATTTCGCCCATTGAGCCAATTCCTATATTGACTTTTAATCGCCGACCTTCTAATTCTCACCTGAATTGGAGGGCAACCAGTAAGCTACCCCTTCATCACCATTAGCCAAGTAGCATCCACATTGTACTTCACTACTATCCTTCTACTTATACCAGCCTCTTCCCTGATCGAAAACCACATACTCAAATGAACCTGCCCCTGTAGTACAAATAAGTACACCAGCCTTGTAACCTGAAAATGAAGACCCTCTTCCATGGGCAAAAAAAATCAGAGAAAAAGCACTTAACTTCACCGTCAGCCCCCAAAGCCAACATTCTAATTTTAAACTACTCTCTGTTCTTTCATGGGGGACCAGATTTGGGTGCCACCCCAGTACTGACCCATTTCTAACGGCCTATGTATTTCGTACATTCCTGCTAGCCAACATGAATATCACCCAACACAACAATCGCTTAACCAACTATAATGCATACAAAACTCCAACCACACTCGACCTCCACACCCCGCTTACAAGCAAGTACCCCCCCATGCCCCCCCACCCAAACACATACACCGATCTCTCCACATAACCCCTCAACCCCCAGCATATCAACAGACCAAACAAACCTTAAAGTACATAGCACATACTATCCTAACCGCACATAGCACATCCCGTTAAAACCCTGCTCATCCCCACGGATGCCCCCCCTCAGTTAGTAATCCCTTACTCACCATCCTCCGTGAAATCAATATCCCGCACAAGAGTGCTACTCCCCTCGCTCCGGGCCCATAAAACCTGGGGGTAGCTAAAGTGAGCTGTATCCGGCATCTGGTTCTTACTTCAGGGCCATAAAACCCAAGATCGCCCACACGTTCCCCTTAAATAAGACATCACGATGGATCACAGGCCTATCACCCTATTAATCACTCACGGGAGCTCTCCATGCATCTGGTATTTTTTCGGGGGGGGATGCACGCGATAGCATCGCGGGCCGCTGGAACCGGAGCACCCTATGTCGCAGGATCTGTCTTTGATTCCTACCTCATGCCATTATTAATCGCGCCTAATATCCAATATCCTAGCCCCACCCTCAGTGTTTGAAGCTGCTATTTAATTTATGCTAGAGGACATAAAATTACCAAAAAAAAATAAACGAACTCTCAACAACCCTACCCCATCAACCCAACAAAATCCAATTTTTATCTTTAGGCTATGTGCACTTTCAACAGGCACCCCTCAACTAACACAATCTCCTTCTTATCCCACCCACCAACCCCCCCCCCCCCTTCCTCCCTCTTTCTCCATTTTCCCCACAAACACCGCTACTACCCCCACACCCCAGACCAACCCAACCCAAAAGACACCCCGCACG	*	NM:i:2322	ms:i:18279	AS:i:18198	nn:i:0	tp:A:P	cm:i:342	s1:i:3187	s2:i:0	de:f:0.1405	rl:i:0`],
	// FIXME:
	"modbam2bed/examples/wasm.html": [`AJKHDGFJKGHDS`],
	"samtools/examples/1.10.html": [`r003	16	ref	29	30	6H5M	*	0	0	TAGGC	*\nr001	83	ref	37	30	9M	=	7	-39	CAGCGCCAT	*`],
	"sed/examples/v4.8.html": [
		`@read1\nACGTAC----AGCAG\n+\nJJJJJJJJJJJJJJJ\n@read2\nACGATCATACCAGCA\n+\nJJJJJJJJJJJJJJJ`,
		`>read1\nACGTACGACTAGCAG\n>read2\nACGATCATACCAGCA`
	],
	"seq-align/examples/dc41988.html": [
		`== Alignment 0 lengths (4, 7):\n\nhit 0.0 score: 6\n  CGT  [pos: 1; len: 3]\n  CGT  [pos: 4; len: 3]\n\nhit 0.1 score: 4\n  AC  [pos: 0; len: 2]\n  AC  [pos: 0; len: 2]\n\n==\n`,
		`AC---GT\nACCCCGT`,
		`TACGA [3,13]\nCGAC [9,15]\nACG [0,4]\nACG [0,14]\nCGA [5,9]\nAC [0,17]\nAC [0,11]\nCG [1,9]\nAC [4,17]\nAC [4,11]\nAC [11,14]\nAC [14,17]\nA [0,7]\nT [3,8]\nA [4,7]\nA [7,14]\nT [8,13]\nC [9,12]\nC [9,18]`
	],
	"seqtk/examples/v1.2.html": [`chr1	15	5	4	4	2	0	0	0	4	0	0	0\nchr2	15	6	5	2	2	0	0	0	2	0	0	0`],
	"seqtk/examples/v1.3.html": [`chr1	15	5	4	4	2	0	0	0	4	0	0	0\nchr2	15	6	5	2	2	0	0	0	2	0	0	0`],
	"ssw/examples/ad452ea.html": [
		`@HD	VN:1.4	SO:queryname\n@SQ	SN:chr1	LN:54\nread1	0	chr1	3	4	10=	*	0	0	TACGACTACG	*	AS:i:20	NM:i:0`,
		`When maskLen < 15, the function ssw_align doesn't return 2nd best alignment information.`
	],
	"wgsim/examples/a12da33.html": [`chr1_5_9_0:0:0_0:0:0_0/2\nACGAC\n+\n22222\n@chr1_9_13_0:0:0_0:0:0_1/2\nCTAGC\n+\n22222\n@chr1_6_10_0:0:0_0:0:0_2/2\nAGTCG\n+\n22222\n@chr2_8_12_1:0:0_0:0:0_0/2\nTGGTA\n+\n22222\n@chr2_4_8_0:0:0_0:0:0_1/2\nATCAT\n+\n22222\n@chr2_2_6_0:0:0_0:0:0_2/2\nGATCG\n+\n22222`],

	// FIXME:
	// "simple.html": `r001	163	ref	7	30	8M4I4M1D3M	=	37	39	TTAGATAAAGAGGATACTG	*	XX:B:S,12561,2,20,112\nr002	0	ref	9	30	1S2I6M1P1I1P1I4M2I	*	0	0	AAAAGATAAGGGATAAA	*\nr003	0	ref	9	30	5H6M	*	0	0	AGCTAA	*\nr004	0	ref	16	30	6M14N1I5M	*	0	0	ATAGCTCTCAGC	*\nr003	16	ref	29	30	6H5M	*	0	0	TAGGC	*\nr001	83	ref	37	30	9M	=	7	-39	CAGCGCCAT	*\nx1	0	ref2	1	30	20M	*	0	0	AGGTTTTATAAAACAAATAA	????????????????????\nx2	0	ref2	2	30	21M	*	0	0	GGTTTTATAAAACAAATAATT	?????????????????????\nx3	0	ref2	6	30	9M4I13M	*	0	0	TTATAAAACAAATAATTAAGTCTACA	??????????????????????????\nx4	0	ref2	10	30	25M	*	0	0	CAAATAATTAAGTCTACAGAGCAAC	?????????????????????????\nx5	0	ref2	12	30	24M	*	0	0	AATAATTAAGTCTACAGAGCAACT	????????????????????????\nx6	0	ref2	14	30	23M	*	0	0	TAATTAAGTCTACAGAGCAACTA	???????????????????????`,
	// "multiple-tools.html": `min_len: 9; max_len: 19; avg_len: 14.00; 1 distinct quality values\nPOS	#bases	%A	%C	%G	%T	%N	avgQ	errQ	%low	%high\nALL	28	32.1	10.7	32.1	25.0	0.0	1.0	3.0	100.0	0.0\n1	2	50.0	0.0	0.0	50.0	0.0	1.0	3.0	100.0	0.0\n2	2	0.0	0.0	0.0	100.0	0.0	1.0	3.0	100.0	0.0\n3	2	50.0	0.0	50.0	0.0	0.0	1.0	3.0	100.0	0.0\n4	2	0.0	0.0	100.0	0.0	0.0	1.0	3.0	100.0	0.0\n5	2	50.0	50.0	0.0	0.0	0.0	1.0	3.0	100.0	0.0\n6	2	0.0	0.0	50.0	50.0	0.0	1.0	3.0	100.0	0.0\n7	2	50.0	50.0	0.0	0.0	0.0	1.0	3.0	100.0	0.0\n8	2	50.0	0.0	0.0	50.0	0.0	1.0	3.0	100.0	0.0\n9	2	50.0	0.0	50.0	0.0	0.0	1.0	3.0	100.0	0.0\n10	1	0.0	0.0	100.0	0.0	0.0	1.0	3.0	100.0	0.0\n11	1	100.0	0.0	0.0	0.0	0.0	1.0	3.0	100.0	0.0\n12	1	0.0	0.0	100.0	0.0	0.0	1.0	3.0	100.0	0.0\n13	1	0.0	0.0	100.0	0.0	0.0	1.0	3.0	100.0	0.0\n14	1	100.0	0.0	0.0	0.0	0.0	1.0	3.0	100.0	0.0\n15	1	0.0	0.0	0.0	100.0	0.0	1.0	3.0	100.0	0.0\n16	1	100.0	0.0	0.0	0.0	0.0	1.0	3.0	100.0	0.0\n17	1	0.0	100.0	0.0	0.0	0.0	1.0	3.0	100.0	0.0\n18	1	0.0	0.0	0.0	100.0	0.0	1.0	3.0	100.0	0.0\n19	1	0.0	0.0	100.0	0.0	0.0	1.0	3.0	100.0	0.0`,
	// "files-remote.html": `SRR622461.75277885	83	20	39352748	60	101M	=	39352436	-412	GTCTGCTGACTCCTCAGCCCAACACTGGTGCAGCTCTTCCACCAAAGGGGTTCCTTAAGGGTCTAAGGTGATTCCGGGCATAGGGCCCATGTCCATCTGTT	EGHHIJIJGLLLLJLLKLJKJKLKLLKILJLMKLLKMLLKJKKIJMKKKIMKKKMJILKJIKKJILJIKJKLKKBJJIKJIKJJJKJJIJGJIIHIHFBFC	X0:i:1	X1:i:0	MD:Z:64C0C35	RG:Z:SRR622461	AM:i:37	NM:i:2	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@HH\nSRR622461.75277886	1171	20	39352764	60	101M	=	39352464	-400	GCCCAACACTGGTGCAGCTCTTCCACCAAAGGGGTTCCTTAAGGGTCTAAGGTGATTCCGGGCATAGGGCCCATGTCCATCTGTATGCTCAATTTAGCATA	<>;=FIBJ?KK9=9>A7(3<29.>B;>F:EC@;:;=?<=>=8	X0:i:1	X1:i:0	MD:Z:48C0C34T2T13	RG:Z:SRR622461	AM:i:37	NM:i:4	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nSRR622461.75277887	147	20	39352764	60	101M	=	39352464	-400	GCCCAACACTGGTGCAGCTCTTCCACCAAAGGGGTTCCTTAAGGGTCTAAGGTGATTCCGGGCATAGGGCCCATGTCCATCTGTTTGCTCAATTTAGCATA	@GCDBHJHKKKIKFLMILLLMGLLHLLJJMKKKIMLLLMJJMKKILKJIMKIKJKMKKBJKJKJJLJJJKKKJKHKKKHKKJHKKJIJJIGGIIEEBDDCA	X0:i:1	X1:i:0	MD:Z:48C0C37T13	RG:Z:SRR622461	AM:i:37	NM:i:3	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nSRR622461.75277899	99	20	39352774	60	101M	=	39353106	432	GGTGCAGCTCTTCCACCAAAGGGGTTCCTTAAGGGTCTCCGGTGATTCCGGGCATAGGGCCCATGTCCATCTGTTTGTTCAATTTAGCATACTTTGTTTCC	CDDFGIIIKHKHIIJHJKLLKKKJHIJJLIJLKKKIJLJJBKHKKKIJKBLKKKCJLKC	X0:i:1	X1:i:0	MD:Z:101	RG:Z:SRR622461	AM:i:37	NM:i:0	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B\nSRR622461.75277898	163	20	39352789	60	101M	=	39353044	355	CCAAAGGGGTTCCTTAAGGGTCTCCGGTGATTCCGGGCATAGGGCCCATGTCCATCTGTTTGTTCAATTTAGCATACTTTGTTTCCACTGTGATGCTGTGA	ADEFDDFGHGGHIKHIKJJJJIJIJBKHKKJIJJBKKJKDJKKKJKKKKKKJKLKJMKKIJKKIJLCKJJ>FEHFDIMJJLKJAAHLIMKJKKJJIJHGG<	X0:i:1	X1:i:0	MD:Z:101	RG:Z:SRR622461	AM:i:37	NM:i:0	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nSRR622461.75277888	147	20	39352829	60	101M	=	39352539	-390	AGGGCCCATGTCCATCTGTTTGTTCAATTTAGCATACTTTGTTTCCACTGTGATGCTGTGAGGTCTTGCTAAGGACAGCCAGGGGAAAATGACTTTCTGAT	:G?HAEJJKIKFKILLKIMMLIMLGJGMMKMKLKKGEAMLIMMFLLKKLIKJKKJKKIKJMJIKKLKJKJILJIJKLJIJLJJIIHHGIIGGHIGDCEDDA	X0:i:1	X1:i:0	MD:Z:86T14	RG:Z:SRR622461	AM:i:37	NM:i:1	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nSRR622461.75277889	83	20	39352838	60	101M	=	39352566	-372	GTCCATCTGTTTGTTCAATTTAGCATACTTTGTTTCCACTGTGATGCTGTGAGGTCTTGCTAAGGACAGCCAGGGGAAAATGACTTTCTGATAAGCCCAAA	EIHIHJKKIMLLJLLLJLNMKMKLKKKEAKLIMMLLKKKLIKJKLKKKIKJLKILKMKJKJILJJJKLJKKLJJJJIHIJKIJJLLJJJHIHGKHIHFCBC	X0:i:1	X1:i:0	MD:Z:77T23	RG:Z:SRR622461	AM:i:37	NM:i:1	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@C\nSRR622461.75277901	99	20	39352839	60	101M	=	39353150	411	TCCATCTGTTTGTTCAATTTAGCATACTTTGTTTCCACTGTGATGCTGTGAGGTCTTGCTAAGGACAGCCAGGGGAAAATGACTTTCTGATAAGCCCAAAC	CCDFHGJIIGHJIHIJLJHHIKJJJJILIIKJIACJKILKJKKKKKMKKKLKLHJMJKJLKMKLHILLKKLDLLLGMMLKFEJMJJIMLLJFGGIDFIFD<	X0:i:1	X1:i:0	MD:Z:76T24	RG:Z:SRR622461	AM:i:37	NM:i:1	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nSRR622461.75277900	99	20	39352842	60	101M	=	39353146	404	ATCTGTTTGTTCAATTTAGCATACTTTGTTTCCACTGTGATGCTGTGAGGTCTTGCTAAGGACAGCCAGGGGAAAATGACTTTCTGATAAGCCCAAACATT	CDCGHHGGIIHHJKIHHIKIKJJGLIIKJICDJKILKJKKKKJLKKKKKKKJMIKKMJMKLLILKKKLLLLKCMMMDLLIMIJKMLLLKMJKJGK@KGHG=	X0:i:1	X1:i:0	MD:Z:73T27	RG:Z:SRR622461	AM:i:37	NM:i:1	SM:i:37	MQ:i:60	XT:A:U	BQ:Z:@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@`,
};

// // Should error if we create a new .html example file but don't test it
// it("All examples are being tested", () => {
// 	cy.exec("ls ../tools/*/examples/*.html").then(result => {
// 		const tests = result.stdout.split("\n");
// 		console.log(tests);
// 		expect(tests.length).to.equal(Object.keys(EXPECTED_OUTPUTS).length);
// 	});
// });

// Dynamically create a test for each expected output
Object.keys(EXPECTED_OUTPUTS).forEach(file => {
	it(`Validate ${file}`, () => {
		cy.visit(`tools/${file}`);
		for(let check of EXPECTED_OUTPUTS[file])
			cy.get("body").contains(check);
	});
});
