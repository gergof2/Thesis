-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 01, 2022 at 09:23 AM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thesis`
--

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
CREATE TABLE IF NOT EXISTS `tests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `engWords` varchar(260) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `hunWords` varchar(260) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `score` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mode` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `user_id`, `engWords`, `hunWords`, `score`, `date`, `mode`) VALUES
(43, 1, 'to weep,to send a letter,fund,dentist,accident-ticket,to pluck up courage,merry,innkeeper,his hair stands on end,panacea', 'sír,X leveled küld,alap,fogorvos,X utasbiztosítás,X nekibátorodik,X vidám,X kocsmáros,X égnek áll a haja,X csodaszer', 3, '2022-10-26 12:14:59', 'am'),
(44, 1, 'X proviso,bow,X presumption,X shipping intelligence,X tubular,X drag-line,cage,X to call sy to account,X to enlarge,X implement', 'kikötés,íj,valószínűség,hajózási hírek,csöves,vonóköteles kotró,kalitka,felelősségre von vkit,nagyít,eszköz', 2, '2022-10-26 12:24:57', 'ma'),
(60, 1, 'containment,vague,to strand,elaborate,river frontage,blink,conduit,to lap around,to expire,syringe', 'összeszorítás,homályos,megfeneklik,megmunkált,folyóparti telek,pislogás,cső,körülnyal,kilehel,fecskendő', 8, '2022-10-31 13:31:28', 'me');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(16) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(64) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `dateOfBirth` date NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `dateOfBirth`, `score`, `createDate`) VALUES
(1, 'tester', 'test@test.com', '$2b$10$lrYu6RKRyY49NjWNmuJJTe2Q2ifTlJ/n.1HPr638eRfibGGAxW1VG', '2000-10-24', 99, '2022-10-13 10:38:52'),
(3, 'geza222', 'geza@test.com', '$2b$10$CA8Fsg87kJME69/G47u/.eIwM1R.6XsPkYsGEvdMzyTUlOlXnqCWW', '2000-02-25', 20, '2022-10-25 11:28:44'),
(4, 'Adam23', 'adam@test.com', '$2b$10$0AveoHX.EcMJMbZsKQZzRuy69g55U.Zz7kEhKt1bcGxaDREJ6j3fy', '2005-02-02', 19, '2022-10-25 11:29:37'),
(5, 'Eva777', 'eva@test.com', '$2b$10$wTLq9xAc50SedC0j8Z8E5.tpQAZu6yZjvFNVx1xAcltRi0hjo5m.a', '2000-02-02', 16, '2022-10-25 11:30:36'),
(6, 'Gergo77', 'gergo@test.com', '$2b$10$hL6NWdfNtySDVPBjjCY3nuWdquQTVYMQMKnYYSbgahVr/FwFFfu62', '2000-10-22', 14, '2022-10-25 11:32:34'),
(7, 'Tomi20', 'tomi20@test.com', '$2b$10$VUVQ8jrKdG21AFi/I4x6pecavdzbNAHhduT28tbBL.LToyktj50ca', '2002-10-10', 10, '2022-10-25 11:33:05'),
(8, 'David28', 'david@test.com', '$2b$10$6mLxbv6YAMKajjFYS4lMlOICFznORBJ6iwnM11b/EBs4XvsDEvnOG', '1997-10-10', 2, '2022-10-25 11:37:29'),
(10, 'BelaAndras', 'belaandras@test.com', '$2b$10$susBiRERVOCND5nE81tYT.vAdcZWobNiuZevq2hcvgnrl.TwnzAsa', '2022-09-28', 11, '2022-10-31 14:04:34');

-- --------------------------------------------------------

--
-- Table structure for table `words`
--

DROP TABLE IF EXISTS `words`;
CREATE TABLE IF NOT EXISTS `words` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `english` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  `hungarian` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `words`
--

INSERT INTO `words` (`id`, `english`, `hungarian`) VALUES
(1, 'to be taken aback', 'meg van lepve'),
(2, 'to abase', 'megaláz'),
(3, 'abbey', 'apátság'),
(4, 'abdomen', 'potroh'),
(5, 'i can not abide him!', 'ki nem állhatom!'),
(6, 'to go aboard', 'hajóra száll'),
(7, 'all aboard!', 'beszállás!'),
(8, 'deadmen!', 'üresek a poharak!'),
(9, 'above-mentioned', 'fent említett'),
(10, 'from abroad', 'külföldről'),
(11, 'in absence of', 'hiányában'),
(12, 'to accede', 'beleegyezik'),
(13, 'to accept', 'elfogad'),
(14, 'dentist', 'fogorvos'),
(15, 'in accordance with', 'vminek megfelelően'),
(16, 'to call sy to account', 'felelősségre von vkit'),
(17, 'to acetify', 'megsavanyít'),
(18, 'knee', 'térd'),
(19, 'dearth', 'hiány'),
(20, 'incline', 'lejtő'),
(21, 'to incline', 'lejt'),
(22, 'to accomplish', 'befejez'),
(23, 'accomplished', 'tökéletes'),
(24, 'patent', 'szabadalom'),
(25, 'prevalent', 'uralkodó'),
(26, 'to predict', 'megjósol'),
(27, 'to elucidate', 'megmagyaráz'),
(28, 'to elucidate', 'értelmez'),
(29, 'to promulgate', 'hirdet'),
(30, 'to encapsulate', 'betokosodik'),
(31, 'to incinerate', 'eléget'),
(32, 'impetus', 'lendítőerő'),
(33, 'ban', 'tilalom'),
(34, 'ban', 'átok'),
(35, 'to ban', 'kiközösít'),
(36, 'to ban', 'kitilt'),
(37, 'identical', 'megegyező'),
(38, 'to amend', 'megjavít'),
(39, 'amendment', 'módosítás'),
(40, 'compliance', 'engedékenység'),
(41, 'to utilize', 'hasznosít'),
(42, 'to revert', 'visszatér'),
(43, 'ancillary', 'alárendelt'),
(44, 'void', 'üresség'),
(45, 'to void', 'érvénytelenít'),
(46, 'assumption', 'feltevés'),
(47, 'conjunction', 'kötőszó'),
(48, 'in conjunction with', 'együtt'),
(49, 'to leach', 'áztat'),
(50, 'phenomenon', 'jelenség'),
(51, 'to perceive', 'észrevesz'),
(52, 'to perceive', 'felfog'),
(53, 'to diminish', 'csökkent'),
(54, 'to assume', 'elfogad'),
(55, 'decision', 'döntés'),
(56, 'to attain', 'elér'),
(57, 'scenario', 'forgatókönyv'),
(58, 'predecessor', 'előd'),
(59, 'interim', 'ideiglenes'),
(60, 'deliberately', 'akarattal'),
(61, 'to rely', 'megbízik'),
(62, 'abrasion', 'kopás'),
(63, 'controversial', 'vitás'),
(64, 'stratification', 'rétegződés'),
(65, 'successive', 'egymást követő'),
(66, 'encounter', 'találkozás'),
(67, 'to encounter', 'összecsap'),
(68, 'rind', 'héj'),
(69, 'lattice', 'rostély'),
(70, 'lattice', 'rács'),
(71, 'to thrust', 'lök'),
(72, 'thrust', 'döfés'),
(73, 'thrust', 'szúrás'),
(74, 'susceptible', 'fogékony'),
(75, 'domain', 'birtok'),
(76, 'to delineate', 'ábrázol'),
(77, 'to precede', 'megelőz'),
(78, 'to incorporate', 'egyesül'),
(79, 'supplementary', 'szakítás'),
(80, 'to rupture', 'szakít'),
(81, 'containment', 'összeszorítás'),
(82, 'raw', 'nyers'),
(83, 'access', 'belépés'),
(84, 'to discern', 'megkülönböztet'),
(85, 'remedial', 'javító'),
(86, 'remedial', 'gyógyító'),
(87, 'syringe', 'fecskendő'),
(88, 'reinforced concrete', 'vasbeton'),
(89, 'miscible', 'elegyedő'),
(90, 'caustic', 'maró'),
(91, 'ultimate', 'végső'),
(92, 'tortuous', 'tekervényes'),
(93, 'tortuosity', 'görbeség'),
(94, 'shear plane', 'nyírófelület'),
(95, 'traverse', 'átlós vonal'),
(96, 'to traverse', 'keresztez'),
(97, 'regime', 'uralom'),
(98, 'to clog up', 'akadályoz'),
(99, 'asterisk', 'csillagocska'),
(100, 'miscellaneous', 'kevert'),
(101, 'subtle', 'finom'),
(102, 'fetus', 'magzat'),
(103, 'foetus', 'magzat'),
(104, 'adverse', 'ellenséges'),
(105, 'irrigation', 'öntözés'),
(106, 'stem', 'szár'),
(107, 'kiln', 'égetőkemence'),
(108, 'novice', 'újonc'),
(109, 'fund', 'alap'),
(110, 'extent', 'kiterjedés'),
(111, 'inherent', 'benne rejlő'),
(112, 'to sequester', 'elkülönít'),
(113, 'ambient', 'körülvevő'),
(114, 'to electroplate', 'galvanizál'),
(115, 'silt', 'iszap'),
(116, 'infiltration', 'beszivárgás'),
(117, 'dump', 'lerakóhely'),
(118, 'to dump', 'lerak'),
(119, 'vitreous', 'üvegszerű'),
(120, 'arc', 'ív'),
(121, 'to suppress', 'elnyom'),
(122, 'purport', 'értelem'),
(123, 'to purport', 'tartalmaz'),
(124, 'detrimental', 'káros'),
(125, 'to compel', 'kényszerít'),
(126, 'to counteract', 'ellensúlyoz'),
(127, 'consumption', 'fogyasztás'),
(128, 'precious', 'értékes'),
(129, 'drawback', 'hátrány'),
(130, 'to claim', 'igényel'),
(131, 'bead', 'gyöngy'),
(132, 'to bead', 'buborékol'),
(133, 'hence', 'ezentúl'),
(134, 'slurry', 'iszap'),
(135, 'to pulverize', 'porrá tör'),
(136, 'to exacerbate', 'elkeserít'),
(137, 'cage', 'kalitka'),
(138, 'to acquire', 'megszerez'),
(139, 'to warrant', 'biztosít'),
(140, 'warrant', 'jogosultság'),
(141, 'pertinent', 'helyes'),
(142, 'peat', 'tőzeg'),
(143, 'sawdust', 'fűrészpor'),
(144, 'to attenuate', 'vékonyít'),
(145, 'disclosure', 'közzététel'),
(146, 'proxy', 'helyettes'),
(147, 'feldspar', 'földpát'),
(148, 'conceivable', 'elképzelhető'),
(149, 'to broach', 'szóba hoz'),
(150, 'plethora', 'túltengés'),
(151, 'alloy', 'ötvözet'),
(152, 'weed-killer', 'gyomirtó'),
(153, 'defoliant', 'lombtalanító'),
(154, 'to depilate', 'szőrtelenít'),
(155, 'flue', 'füstcsatorna'),
(156, 'to retrieve', 'elhoz'),
(157, 'rudiment', 'kezdet'),
(158, 'jurisdiction', 'törvénykezés'),
(159, 'mull', 'vékony'),
(160, 'to mull', 'rágódik'),
(161, 'blend', 'keverék'),
(162, 'to blend', 'kever'),
(163, 'unpredictable', 'megjósolhatatlan'),
(164, 'goggles', 'védőszemüveg'),
(165, 'drag-line', 'vonóköteles kotró'),
(166, 'to stun', 'elkábít'),
(167, 'inadvertent', 'figyelmetlen'),
(168, 'bay', 'babér'),
(169, 'to bay', 'ugat'),
(170, 'surge', 'tenger'),
(171, 'to surge', 'hullámzik'),
(172, 'hauler', 'szállító'),
(173, 'haulier', 'fuvaros'),
(174, 'stringent', 'szigorú'),
(175, 'consistent', 'megegyező'),
(176, 'to emulate', 'verseng'),
(177, 'mortar', 'malter'),
(178, 'gravel', 'sóder'),
(179, 'to deteriorate', 'megromlik'),
(180, 'deleterious', 'ártalmas'),
(181, 'mason', 'kőműves'),
(182, 'masonry', 'kőművesmunka'),
(183, 'chalk', 'kréta'),
(184, 'shale', 'agyagpala'),
(185, 'eventually', 'végül'),
(186, 'spine', 'tüske'),
(187, 'to crumple', 'összegyűr'),
(188, 'durable', 'tartós'),
(189, 'durability', 'tartósság'),
(190, 'bulking agent', 'duzzasztó anyag'),
(191, 'to facilitate', 'megkönnyít'),
(192, 'dormant', 'rejtett'),
(193, 'to prevail among in', 'uralkodik'),
(194, 'friable', 'omlós'),
(195, 'boot-licker', 'talpnyaló'),
(196, 'to aggravate', 'bosszant'),
(197, 'to deplete', 'kimerít'),
(198, 'to ignite', 'meggyújt'),
(199, 'misnomer', 'helytelen elnevezés'),
(200, 'omnipresent', 'mindenütt jelenlevő'),
(201, 'to attenuate', 'tompít'),
(202, 'mandatory', 'elrendelő'),
(203, 'dermal', 'rágcsáló'),
(204, 'insect', 'rovar'),
(205, 'fumigant', 'füstölőszer'),
(206, 'peculiar', 'különös'),
(207, 'deceptive', 'csalfa'),
(208, 'indispensable', 'alapvető'),
(209, 'cleavage', 'hasadás'),
(210, 'proviso', 'kikötés'),
(211, 'caveat', 'kikötés'),
(212, 'devoid', 'mentes'),
(213, 'fertile', 'termékeny'),
(214, 'sanitary', 'egészségügyi'),
(215, 'to roast', 'pörköl'),
(216, 'mordant', 'pácolószer'),
(217, 'drilling mud', 'fúróiszap'),
(218, 'to discard', 'eldob'),
(219, 'gravure', 'metszet'),
(220, 'ubiquitous', 'mindenütt jelenlevő'),
(221, 'intrinsic', 'belső'),
(222, 'filing', 'reszelék'),
(223, 'brass', 'bronz'),
(224, 'jet-cement', 'szórt cement'),
(225, 'gout', 'köszvény'),
(226, 'offspring', 'ivadék'),
(227, 'ammunition', 'muníció'),
(228, 'plumbing', 'vízvezeték rendszer'),
(229, 'to caulk', 'tömít'),
(230, 'caulk', 'tömítés'),
(231, 'lining', 'betét'),
(232, 'enamel', 'zománc'),
(233, 'mildew', 'penész'),
(234, 'glaze', 'üvegbevonat'),
(235, 'antiknock additive', 'kopogásgátló adalék'),
(236, 'pervasive', 'átható'),
(237, 'spatial', 'térbeli'),
(238, 'cursory', 'futólagos'),
(239, 'to delve', 'ás'),
(240, 'resolute', 'határozott'),
(241, 'to enmesh', 'behálóz'),
(242, 'formidable', 'félelmetes'),
(243, 'relevant', 'fontos'),
(244, 'to explore', 'kikutat'),
(245, 'to browse', 'legel'),
(246, 'reward', 'jutalom'),
(247, 'to reward', 'megjutalmaz'),
(248, 'to hasten', 'siet'),
(249, 'to pertain tosingular', 'tartozik vhova'),
(250, 'to mitigate', 'enyhít'),
(251, 'to assess', 'felbecsül'),
(252, 'sheer', 'tiszta'),
(253, 'to promote', 'előléptet'),
(254, 'illicit', 'tiltott'),
(255, 'incentive', 'ösztönzés'),
(256, 'to rebut', 'visszaver'),
(257, 'to refute', 'megcáfol'),
(258, 'presumption', 'valószínűség'),
(259, 'to adulterate', 'meghamisít'),
(260, 'proximity', 'közelség'),
(261, 'to constrict', 'összehúz'),
(262, 'orifice', 'szájnyílás'),
(263, 'nozzle', 'fúvóka'),
(264, 'exempt', 'mentes'),
(265, 'to exempt', 'felszabadít'),
(266, 'pending', 'függőben levő'),
(267, 'imminent', 'küszöbön álló'),
(268, 'to divert', 'eltérít'),
(269, 'appeal', 'fellebbezés'),
(270, 'to appeal', 'fellebbez'),
(271, 'appeal', 'vonzerő'),
(272, 'gastrointestinal tract', 'béltraktus'),
(273, 'implement', 'eszköz'),
(274, 'to implement', 'végrehajt'),
(275, 'to insulate', 'elszigetel'),
(276, 'placard', 'plakát'),
(277, 'to placard', 'kiplakátoz'),
(278, 'rust', 'rozsda'),
(279, 'to adhere', 'tapad'),
(280, 'dike', 'gát'),
(281, 'dyke', 'gát'),
(282, 'redundant', 'bőséges'),
(283, 'unscrupulous', 'lelkiismeretlen'),
(284, 'elaborate', 'megmunkált'),
(285, 'to elaborate', 'gondosan kidolgoz'),
(286, 'to relinquish', 'felad'),
(287, 'to render', 'viszonoz'),
(288, 'to anticipate', 'előre meglát'),
(289, 'carcass', 'hulla'),
(290, 'abattoir', 'vágóhíd'),
(291, 'slaughterhouse', 'vágóhíd'),
(292, 'innocuous', 'ártalmatlan'),
(293, 'haul', 'húzás'),
(294, 'to haul', 'húz'),
(295, 'to enact', 'elrendel'),
(296, 'to acquire', 'elsajátít'),
(297, 'contingency', 'véletlenség'),
(298, 'benefication', 'dúsítás'),
(299, 'to submit', 'alávet'),
(300, 'warrant', 'biztosíték'),
(301, 'to warrant', 'kezeskedik'),
(302, 'overburden', 'túlterhelés'),
(303, 'to overburden', 'túlterhel'),
(304, 'overburden', 'fedőréteg'),
(305, 'barren', 'meddő'),
(306, 'to seep', 'szivárog'),
(307, 'to reclaim', 'visszanyer'),
(308, 'sin', 'bűn'),
(309, 'to sin', 'bűnözik'),
(310, 'voucher', 'bizonyíték'),
(311, 'precious', 'kecses'),
(312, 'progeny', 'utód'),
(313, 'progeny', 'leszármazott'),
(314, 'progeny', 'származék'),
(315, 'arid', 'száraz'),
(316, 'germane', 'vmihez tartozó'),
(317, 'susceptible', 'hajlamos'),
(318, 'paint thinner', 'hígító'),
(319, 'to ascertain', 'kiderít'),
(320, 'vague', 'homályos'),
(321, 'barrage', 'gát'),
(322, 'personnel', 'személyzet'),
(323, 'to donate', 'adományoz'),
(324, 'expenditure', 'kiadás'),
(325, 'to abate', 'csökken'),
(326, 'solely', 'kizárólag'),
(327, 'expenditious', 'gyors'),
(328, 'manifest', 'rakományjegyzék'),
(329, 'to manifest', 'tanúsít'),
(330, 'to stipulate', 'kiköt'),
(331, 'to entail', 'vele jár'),
(332, 'puncture', 'szúrás'),
(333, 'to puncture', 'kilyukaszt'),
(334, 'valve', 'szelep'),
(335, 'to reject', 'elutasít'),
(336, 'bellows', 'fújtató'),
(337, 'to weld', 'hegeszt'),
(338, 'drip', 'csöpögés'),
(339, 'to drip', 'csöpög'),
(340, 'pallet', 'szalmazsák'),
(341, 'to flush', 'pirul'),
(342, 'flush', 'felriasztás'),
(343, 'to flush', 'öblít'),
(344, 'segregation', 'elkülönítés'),
(345, 'baghouse', 'portalanító fülke'),
(346, 'compaction', 'préselés'),
(347, 'to bleach', 'kifehérít'),
(348, 'bleach', 'fehérítő'),
(349, 'hosiery', 'harisnya-kötöttáru'),
(350, 'salable', 'eladható'),
(351, 'scrap', 'darabka'),
(352, 'to scrap', 'szemétre dob'),
(353, 'etchant', 'maratószer'),
(354, 'toll', 'hídvám'),
(355, 'bale', 'bála'),
(356, 'corporate', 'testületi'),
(357, 'obstacle', 'akadály'),
(358, 'audit', 'vizsgálat'),
(359, 'to audit', 'vizsgál'),
(360, 'perception', 'észrevétel'),
(361, 'duct', 'csatorna'),
(362, 'track', 'nyom'),
(363, 'to track', 'nyomon követ'),
(364, 'to award', 'ítél'),
(365, 'to faster', 'elősegít'),
(366, 'panacea', 'csodaszer'),
(367, 'surplus', 'felesleg'),
(368, 'to opt', 'választ'),
(369, 'to infer', 'következtet'),
(370, 'to imply', 'beleért'),
(371, 'surreptitious', 'titkos'),
(372, 'stealth', 'lopva'),
(373, 'subsidy', 'anyagi támogatás'),
(374, 'to tally', 'megszámol'),
(375, 'tally', 'névcédula'),
(376, 'to accrue', 'növekszik'),
(377, 'superfluous', 'felesleges'),
(378, 'to expire', 'kilehel'),
(379, 'to assert', 'állít'),
(380, 'to devise', 'kigondol'),
(381, 'stigma', 'szégyenbélyeg'),
(382, 'to deny', 'tagad'),
(383, 'to penalize', 'megbüntet'),
(384, 'handicap', 'akadály'),
(385, 'to handicap', 'hátrányos helyzetbe hoz'),
(386, 'to terminate', 'elhatárol'),
(387, 'fortuitous', 'véletlen'),
(388, 'wood char', 'faszén'),
(389, 'warfare', 'háború'),
(390, 'rigorous', 'szomorú'),
(391, 'offset', 'hajtás'),
(392, 'offset', 'sarj'),
(393, 'to offset', 'ellensúlyoz'),
(394, 'to depict', 'ábrázol'),
(395, 'abrasive', 'ledörzsölő'),
(396, 'propensity', 'hajlam'),
(397, 'per se', 'önmagában'),
(398, 'contention', 'harc'),
(399, 'to hinder', 'megakadályoz'),
(400, 'delay', 'késleltetés'),
(401, 'to delay', 'késleltet'),
(402, 'to obstruct', 'akadályoz'),
(403, 'exploit', 'tett'),
(404, 'to exploit', 'kitermel'),
(405, 'to disrupt', 'szétszakít'),
(406, 'to constrain', 'kényszerít'),
(407, 'constraint', 'kényszer'),
(408, 'imperative', 'szükségszerű'),
(409, 'supplement', 'pótlás'),
(410, 'to supplement', 'kiegészít'),
(411, 'to initiate', 'elindít'),
(412, 'residence time', 'tartózkodási idő'),
(413, 'surrogate', 'helyettes'),
(414, 'multitude', 'nagy mennyiség'),
(415, 'fouling', 'eltömődés'),
(416, 'to dislodge', 'kiűz'),
(417, 'premature', 'idő előtti'),
(418, 'scour', 'súrolás'),
(419, 'to scour', 'súrol'),
(420, 'to detain', 'visszatart'),
(421, 'receiving vessel', 'fogadó tartály'),
(422, 'auxiliary', 'kisegítő'),
(423, 'hamper', 'piaci kosár'),
(424, 'to hamper', 'akadályoz'),
(425, 'versatile', 'sokoldalú'),
(426, 'column shell', 'oszlopköpeny'),
(427, 'flenge', 'karima'),
(428, 'to omit', 'elhagy'),
(429, 'manway', 'gyalogjáró'),
(430, 'to baffle', 'zavarba ejt'),
(431, 'to entrain', 'vonatba rak'),
(432, 'to weep', 'sír'),
(433, 'droop', 'lekonyulás'),
(434, 'to droop', 'lekonyul'),
(435, 'weir', 'gát'),
(436, 'likewise', 'hasonlóan'),
(437, 'rivet', 'szegecs'),
(438, 'to rivet', 'szegecsel'),
(439, 'yeast', 'élesztő'),
(440, 'saddle', 'nyereg'),
(441, 'woven wire mesh', 'szőtt fémháló töltet'),
(442, 'to corrugate', 'hullámosít'),
(443, 'gasket', 'tömítés'),
(444, 'tubular', 'csöves'),
(445, 'chill', 'hideg'),
(446, 'to chill', 'fagyaszt'),
(447, 'to impose', 'kivet'),
(448, 'to evolve', 'kifejt'),
(449, 'fluff', 'pehely'),
(450, 'to fluff', 'felborzol'),
(451, 'mesh', 'háló'),
(452, 'filament', 'szál'),
(453, 'vat', 'kád'),
(454, 'aperture', 'nyílás'),
(455, 'to distribute', 'kioszt'),
(456, 'to retain', 'megtart'),
(457, 'parenthesis', 'kerek zárójel'),
(458, 'to propel', 'hajt'),
(459, 'propellant', 'hajtóanyag'),
(460, 'dense', 'sűrű'),
(461, 'lump', 'göröngy'),
(462, 'to lump', 'összehalmoz'),
(463, 'grid', 'rács'),
(464, 'shred', 'foszlány'),
(465, 'to shred', 'darabokra tép'),
(466, 'blowout panel', 'hasadótárcsa'),
(467, 'plumbing', 'tömítés'),
(468, 'conduit', 'cső'),
(469, 'trigger', 'ravasz lőfegyveré'),
(470, 'purge', 'tisztítás'),
(471, 'to purge', 'kitisztít'),
(472, 'earthquake', 'földrengés'),
(473, 'to emanate', 'kiárad'),
(474, 'prone', 'elterült'),
(475, 'to prone to', 'hajlamos vmire'),
(476, 'kraft', 'nátronpapír'),
(477, 'to withstand', ' ellenáll'),
(478, 'to endure', 'kiáll'),
(479, 'to beset', 'üldöz'),
(480, 'pitfall', 'verem'),
(481, 'amenable', 'megközelíthető'),
(482, 'pickle', 'savanyúság'),
(483, 'to pickle', 'besavanyít'),
(484, 'to etch', 'bevés'),
(485, 'skid', 'farolás'),
(486, 'to skid', 'farol'),
(487, 'lithography', 'kőnyomás'),
(488, 'to obviate', 'elhárít'),
(489, 'net', 'háló'),
(490, 'to net', 'behálóz'),
(491, 'nett', 'háló'),
(492, 'to nett', 'behálóz'),
(493, 'to destine', 'rendel'),
(494, 'seal', 'pecsét'),
(495, 'to seal', 'pecsétel'),
(496, 'seal', 'fóka'),
(497, 'bundle', 'köteg'),
(498, 'strand', 'szál'),
(499, 'to strand', 'megfeneklik'),
(500, 'adjacent', 'szomszédos'),
(501, 'to incur', 'magára von'),
(502, 'spoungy', 'szivacsszerű'),
(503, 'array', 'sor'),
(504, 'to array', 'sorba állít'),
(505, 'to align', 'felsorakoztat'),
(506, 'intake', 'betáplálás'),
(507, 'chassis', 'alváz'),
(508, 'reversal', 'megfordítás'),
(509, 'scenery', 'táj'),
(510, 'scenery', 'látvány'),
(511, 'to wander', 'vándorol'),
(512, 'magnificent', 'pompás'),
(513, 'to suspect', 'gyanít'),
(514, 'tame', 'szelíd'),
(515, 'tameness', 'szelídség'),
(516, 'passion', 'passzió'),
(517, 'to enlarge', 'nagyít'),
(518, 'one hassingular at one\'s command', 'vkinek a rendelkezésére áll'),
(519, 'to set in motion', 'mozgásba hoz'),
(520, 'scene', 'táj'),
(521, 'conscience', 'lelkiismeret'),
(522, 'battle', 'csata'),
(523, 'to preserve', 'megőriz'),
(524, 'bravery', 'bátorság'),
(525, 'excitement', 'izgalom'),
(526, 'adventure', 'kaland'),
(527, 'industrious', 'szorgalmas'),
(528, 'hardy', 'szívós'),
(529, 'race', 'fajta'),
(530, 'affection', 'ragaszkodás'),
(531, 'patriotic', 'hazafias'),
(532, 'devotion', 'rajongás'),
(533, 'chieftain', 'törzsfőnök'),
(534, 'to establish a claim tosingular', 'igényt támaszt valamire'),
(535, 'thoroughfare', 'főútvonal'),
(536, 'to surpass', 'felülmúl'),
(537, 'expert', 'járatos'),
(538, 'entire', 'teljes'),
(539, 'entirely', 'teljesen'),
(540, 'legal system', 'jogi rendszer'),
(541, 'individuality', 'egyéniség'),
(542, 'barrier', 'akadály'),
(543, 'oppression', 'elnyomás'),
(544, 'to conquer', 'meghódít'),
(545, 'far off', 'nagyon messzi'),
(546, 'enormous', 'hatalmas'),
(547, 'slate', 'pala'),
(548, 'to be willing to dosingular', 'hajlandó megtenni valamit'),
(549, 'to make sacrifices', 'áldozatot hoz'),
(550, 'to hold high post', 'magas beosztásban van'),
(551, 'impressive', 'hatásos'),
(552, 'to consider', 'tekint'),
(553, 'to supply', 'ellát'),
(554, 'heap', 'halom'),
(555, 'pithead machinery', 'aknatorony'),
(556, 'to flourish', 'virágzik'),
(557, 'chimney', 'kémény'),
(558, 'slag', 'salak'),
(559, 'bard', 'bárd'),
(560, 'award', 'ítélet'),
(561, 'to award', 'odaítél'),
(562, 'craftwork', 'ügyesség'),
(563, 'to carve', 'farag'),
(564, 'oak', 'tölgy'),
(565, 'clue', 'nyom'),
(566, 'to regard', 'tart'),
(567, 'to bear witness tosingular', 'tanúbizonyságot tesz vmiről'),
(568, 'to date back to', 'vhonnan ered'),
(569, 'nobleman', 'nemes'),
(570, 'military post', 'katonai tábor'),
(571, 'trade', 'kereskedelem'),
(572, 'commerce', 'kereskedelem'),
(573, 'river frontage', 'folyóparti telek'),
(574, 'plague', 'pestis'),
(575, 'to destroy', 'elpusztít'),
(576, 'burying-place', 'temetkezési hely'),
(577, 'letters', 'irodalom'),
(578, 'marsh', 'mocsár'),
(579, 'bog', 'mocsár'),
(580, 'moore', 'mocsár'),
(581, 'monk', 'szerzetes'),
(582, 'to make a vow', 'fogadalmat tesz'),
(583, 'vow', 'fogadalom'),
(584, 'pilgrimage', 'zarándoklat'),
(585, 'monastery', 'kolostor'),
(586, 'glory', 'dicsőség'),
(587, 'masterpiece', 'mestermű'),
(588, 'pillar', 'oszlop'),
(589, 'flying buttress', 'gyámív'),
(590, 'nave', 'templomi főhajó'),
(591, 'pointed arch', 'csúcsív'),
(592, 'ornate', 'díszes'),
(593, 'altar', 'oltár'),
(594, 'to set up', 'felállít'),
(595, 'funeral procession', 'temetési menet'),
(596, 'tomb', 'sírkő'),
(597, 'transept', 'kereszthajó'),
(598, 'to command attention', 'figyelmet parancsol'),
(599, 'vault', 'boltozat'),
(600, 'unknown warrior', 'ismeretlen katona'),
(601, 'to commemorate', 'emléket állít'),
(602, 'interior', 'belső'),
(603, 'works', 'szerkezet'),
(604, 'to bear', 'tart'),
(605, 'clock hand', 'óramutató'),
(606, 'pendulum', 'inga'),
(607, 'bob', 'nehezék'),
(608, 'to regulate', 'szabályoz'),
(609, 'dusk', 'félhomály'),
(610, 'to mount', 'felmászik'),
(611, 'to invert', 'megfordít'),
(612, 'lantern', 'világító'),
(613, 'mist', 'köd'),
(614, 'fog', 'köd'),
(615, 'string', 'madzag'),
(616, 'to lean over', 'áthajol'),
(617, 'rail', 'korlát'),
(618, 'deck', 'fedélzet'),
(619, 'board', 'fedélzet'),
(620, 'to gather oneself together', 'összeszedi magát'),
(621, 'to draw apart fromsingular', 'elhúzódik vmitől'),
(622, 'shell', 'lövedék'),
(623, 'situated', 'helyezkedő'),
(624, 'in turn', 'sorjában'),
(625, 'ditch', 'árok'),
(626, 'fortification', 'erősítés'),
(627, 'turret', 'tornyocska'),
(628, 'draw-bridge', 'felvonóhíd'),
(629, 'traitor', 'áruló'),
(630, 'to occupy', 'elfoglal'),
(631, 'imprisonment', 'fogság'),
(632, 'to behead', 'lefejez'),
(633, 'scaffold', 'vérpad'),
(634, 'to put to the block', 'kivégez'),
(635, 'to execute', 'kivégez'),
(636, 'to come to mind', 'eszébe jut'),
(637, 'grim', 'zord'),
(638, 'armour', 'páncél'),
(639, 'torture', 'kínzás'),
(640, 'to torture', 'kínoz'),
(641, 'warder', 'börtönőr'),
(642, 'jailer', 'börtönőr'),
(643, 'to remind sy ofsingular', 'emlékeztet vkit vmire'),
(644, 'autograph', 'aláírás'),
(645, 'note', 'jegyzék'),
(646, 'series', 'sor'),
(647, 'series', 'sorozat'),
(648, 'to respect', 'tisztel'),
(649, 'to flatter', 'hízeleg'),
(650, 'seashore', 'tengerpart'),
(651, 'flattery', 'hízelgés'),
(652, 'praise', 'dicséret'),
(653, 'to lap around', 'körülnyal'),
(654, 'lap', 'szegély'),
(655, 'to cure sy ofsingular', 'kikúrál vkit vmiből'),
(656, 'bishop', 'püspök'),
(657, 'earl', 'gróf'),
(658, 'shipwreck', 'hajótörés'),
(659, 'to be shipwrecked', 'hajótörést szenved'),
(660, 'to fall into the power of sy', 'fogságába esik vkinek'),
(661, 'swear', 'káromkodás'),
(662, 'to swear', 'megesküszik'),
(663, 'oath', 'eskü'),
(664, 'to be forced uponsingular', 'kényszerítve van valamire'),
(665, 'spear', 'lándzsa'),
(666, 'sword', 'kard'),
(667, 'bow', 'íj'),
(668, 'provision', 'ellátás'),
(669, 'fleet', 'flotta'),
(670, 'to set sail for', 'elhajózik vhova'),
(671, 'to land', 'partot ér'),
(672, 'to fight a battle', 'csatát vív'),
(673, 'courage', 'bátorság'),
(674, 'to fall mortally wounded', 'halálos sebet kap'),
(675, 'knight', 'lovag'),
(676, 'victor', 'győztes'),
(677, 'cultivation', 'földművelés'),
(678, 'to improve', 'tökéletesít'),
(679, 'chivalry', 'lovagi rend'),
(680, 'side by side', 'egymás mellett'),
(681, 'to enrich', 'gazdagodik'),
(682, 'essential', 'alapvető'),
(683, 'ballad', 'ballada'),
(684, 'outlaw', 'törvényen kívüli'),
(685, 'crusade', 'keresztes hadjárat'),
(686, 'to leavesingular in charge of sy', 'gondjaira bíz vkinek vmit'),
(687, 'peasant', 'paraszt'),
(688, 'oppressor', 'elnyomó'),
(689, 'baron', 'báró'),
(690, 'game', 'vad erdei'),
(691, 'deer', 'rőtvad'),
(692, 'bold', 'merész'),
(693, 'bold', 'bátor'),
(694, 'brave', 'bátor'),
(695, 'abbot', 'apát'),
(696, 'merry', 'vidám'),
(697, 'archer', 'íjász'),
(698, 'to capture', 'elfog'),
(699, 'to hunt down', 'elfog'),
(700, 'to seize', 'elfog'),
(701, 'to hang', 'felakaszt'),
(702, 'troop', 'csapat'),
(703, 'party', 'csapat'),
(704, 'bundle', 'batyu'),
(705, 'cart', 'kordé'),
(706, 'load', 'teher'),
(707, 'cargo', 'teher'),
(708, 'log', 'fatörzs'),
(709, 'rag', 'rongy'),
(710, 'gallows', 'bitó'),
(711, 'to be in high spirits', 'jókedvű'),
(712, 'beehive', 'méhkas'),
(713, 'helpless', 'tehetetlen'),
(714, 'humming', 'zümmögés'),
(715, 'humming', 'zúgás'),
(716, 'to keep sy busy', 'lefoglal'),
(717, 'to wound', 'megsebesít'),
(718, 'to be wounded', 'megsebesül'),
(719, 'blow', 'ütés'),
(720, 'to seize', 'elkap'),
(721, 'bunch', 'csomó'),
(722, 'dungeon', 'kazamata'),
(723, 'to advance', 'előretart'),
(724, 'victim', 'áldozat'),
(725, 'to keep a good look out', 'jól vigyáz'),
(726, 'to disguise', 'elrejt'),
(727, 'disguise', 'álruha'),
(728, 'to invade', 'betör'),
(729, 'supporter', 'támogató'),
(730, 'to take prisoner', 'foglyul ejt'),
(731, 'to hunt down', 'kézre kerít'),
(732, 'to catch one\'s eyes', 'szembe ötlik'),
(733, 'rafter', 'szarufa'),
(734, 'roof-beam', 'tetőgerenda'),
(735, 'to spin', 'fon'),
(736, 'gap', 'hézag'),
(737, 'persevering', 'kitartó'),
(738, 'strange to say', 'furcsán hangzik'),
(739, 'innkeeper', 'kocsmáros'),
(740, 'nothing is any use', 'semmi sem használ'),
(741, 'in vain', 'hiába'),
(742, 'despair', 'kétségbeesés'),
(743, 'pocket', 'zseb'),
(744, 'to pocket', 'zsebre vág'),
(745, 'to point out', 'rámutat'),
(746, 'to grow fat', 'meghízik'),
(747, 'discretion', 'diszkréció'),
(748, 'to give an example ofsingular', 'példát mond vmiről'),
(749, 'fancy-dress ball', 'álarcosbál'),
(750, 'court jester', 'udvari bolond'),
(751, 'odd', 'szokatlan'),
(752, 'agreeable', 'kellemes'),
(753, 'prudery', 'prüdéria'),
(754, 'daring', 'merész'),
(755, 'to put on the boards', 'színpadra visz'),
(756, 'cynical', 'cinikus'),
(757, 'cynism', 'cinizmus'),
(758, 'puritanical', 'puritán'),
(759, 'puritanism', 'puritanizmus'),
(760, 'morals', 'erkölcs'),
(761, 'hippopotamus', 'víziló'),
(762, 'manner', 'mód'),
(763, 'to interest', 'érdekel'),
(764, 'to lump', 'összecsomósodik'),
(765, 'latter', 'későbbi'),
(766, 'to run down', 'leszalad'),
(767, 'corrupt', 'romlott'),
(768, 'corrupt', 'korrupt'),
(769, 'to corrupt', 'elront'),
(770, 'lively', 'élénk'),
(771, 'to prove', 'bebizonyít'),
(772, 'to detect', 'kinyomoz'),
(773, 'distinguished', 'kiváló'),
(774, 'enthusiasm', 'lelkesedés'),
(775, 'monstrous', 'szörnyű'),
(776, 'spring-cleaning', 'tavaszi nagytakarítás'),
(777, 'to refuse', 'visszautasít'),
(778, 'to salute', 'köszönt'),
(779, 'from that time', 'ettől fogva'),
(780, 'address', 'cím'),
(781, 'to address', 'megszólít'),
(782, 'maze', 'útvesztő'),
(783, 'admission', 'belépés'),
(784, 'to mislead', 'félrevezet'),
(785, 'to mislead', 'becsap'),
(786, 'to get up', 'felébreszt'),
(787, 'to take in', 'bevesz'),
(788, 'to keep on', 'megtart'),
(789, 'have about enough ofsingular', 'elege van valamiből'),
(790, 'to fall behind', 'nyomába szegődik'),
(791, 'to get over', 'túljut'),
(792, 'to pluck up courage', 'nekibátorodik'),
(793, 'to bless', 'megáld'),
(794, 'to pluck', 'húz'),
(795, 'pluck', 'tépés'),
(796, 'to judge', 'ítél'),
(797, 'judge', 'bíró'),
(798, 'to hold on', 'kitart'),
(799, 'bun', 'konty'),
(800, 'whereabouts?', 'merre?'),
(801, 'advisable', 'tanácsos'),
(802, 'to draw out', 'kihúz'),
(803, 'curl your hair with it!', 'kend a hajadra!'),
(804, 'to get crazy', 'megbolondul'),
(805, 'capable', 'képes'),
(806, 'every now and then', 'időnként'),
(807, 'edge', 'él'),
(808, 'to edge', 'élesít'),
(809, 'account', 'számla'),
(810, 'to account', 'tart vminek'),
(811, 'arms of the country', 'ország címere'),
(812, 'to provide', 'beszerez'),
(813, 'to provide', 'ellát'),
(814, 'chest', 'láda'),
(815, 'to set free', 'kiszabadít'),
(816, 'to fetch in', 'behoz'),
(817, 'midst', 'közép'),
(818, 'midst of', 'közepén'),
(819, 'purse', 'pénztárca'),
(820, 'progress', 'haladás'),
(821, 'to progress', 'halad'),
(822, 'close prisoner', 'szigorú őrizet'),
(823, 'accident-ticket', 'utasbiztosítás'),
(824, 'to put in', 'betesz'),
(825, 'to hunt forsingular', 'kutat vmi után'),
(826, 'inquiry', 'érdeklődés'),
(827, 'his hair stands on end', 'égnek áll a haja'),
(828, 'to darn', 'stoppol'),
(829, 'darn', 'stoppolás'),
(830, 'to darn', 'besző'),
(831, 'stale', 'állott'),
(832, 'to stain', 'bepiszkít'),
(833, 'garrett', 'padlásszoba'),
(834, 'chop', 'toka'),
(835, 'to chop', 'aprít'),
(836, 'crust', 'kéreg'),
(837, 'marble', 'márvány'),
(838, 'foreground', 'előtér'),
(839, 'daydream', 'álmodozás'),
(840, 'pride', 'büszkeség'),
(841, 'to reach forsingular', 'nyúl vmiért'),
(842, 'to inspire', 'belélegez'),
(843, 'to seize the opportunity', 'megragadja az alkalmat'),
(844, 'to clench one\'s fists', 'ökölbe szorítja a kezét'),
(845, 'blockhead', 'tökfej'),
(846, 'draughtsman', 'fogalmazó'),
(847, 'draftsman', 'fogalmazó'),
(848, 'to ink the lines', 'kihúzza a vonalakat'),
(849, 'to rub out', 'kiradíroz'),
(850, 'to tie up', 'felköt'),
(851, 'to go ashore', 'partra száll'),
(852, 'bullock cart', 'ökrösszekér'),
(853, 'landing stage', 'kikötő'),
(854, 'to nod', 'bólint'),
(855, 'bronzed', 'lebarnult'),
(856, 'to give a chuckle', 'kuncog'),
(857, 'to sob', 'zokog'),
(858, 'sob', 'zokogás'),
(859, 'unkindly', 'barátságtalan'),
(860, 'irony', 'irónia'),
(861, 'to take it for granted', 'természetesnek vesz'),
(862, 'to be on leave', 'szabadságon van'),
(863, 'to turn up', 'felfelé fordít'),
(864, 'to turn up', 'felhajt'),
(865, 'district', 'körzet'),
(866, 'quay', 'rakpart'),
(867, 'dock', 'dokk'),
(868, 'to sink', 'elsüllyed'),
(869, 'pit of the stomach', 'gyomorszáj'),
(870, 'to go through withsingular', 'végigcsinál vmit'),
(871, 'have the nerve to dosingular', 'van képe megtenni vmit'),
(872, 'cable', 'kábel'),
(873, 'to cable', 'kábelez'),
(874, 'quick-witted', 'gyors észjárású'),
(875, 'shipping office', 'hajótársaság'),
(876, 'uneasy', 'nyugtalan'),
(877, 'hint', 'célzás'),
(878, 'to take the hint', 'megérti a célzást'),
(879, 'rickshaw', 'riksa'),
(880, 'to break into a cold sweat', 'elönti a verejték'),
(881, 'flight', 'repülés'),
(882, 'to grow serious', 'komollyá válik'),
(883, 'to rack', 'kínoz'),
(884, 'shipping intelligence', 'hajózási hírek'),
(885, 'junk', 'dzsunka'),
(886, 'coolie', 'kuli'),
(887, 'idleness', 'semmittevés'),
(888, 'to idle', 'henyél'),
(889, 'idle', 'henye'),
(890, 'divine', 'pompás'),
(891, 'to divine', 'megjósol'),
(892, 'curio', 'ritkaság'),
(893, 'to fling the door open', 'kitárja az ajtót'),
(894, 'to paralyse', 'megbénít'),
(895, 'doorway', 'kapualj'),
(896, 'to go off', 'megcsúnyul'),
(897, 'bald', 'kopasz'),
(898, 'balding', 'kopaszodó'),
(899, 'to bring oneself to dosingular', 'rászánja magát vmire'),
(900, 'mild', 'enyhe'),
(901, 'to establish', 'alapít'),
(902, 'attempt', 'kísérlet'),
(903, 'to attempt', 'megkísérel'),
(904, 'to be of tender age', 'fiatal'),
(905, 'to be certain ofsingular', 'biztos vmiben'),
(906, 'to crumble', 'szétmorzsol'),
(907, 'crumbling', 'omladozó'),
(908, 'to surround', 'körülvesz'),
(909, 'hunting ground', 'vadászterület'),
(910, 'plaster', 'vakolat'),
(911, 'to plaster', 'bevakol'),
(912, 'moss', 'moha'),
(913, 'crack', 'rés'),
(914, 'to crack', 'reped'),
(915, 'clumsy', 'esetlen'),
(916, 'trial', 'megpróbáltatás'),
(917, 'to cling', 'belekapaszkodik'),
(918, 'garment', 'ruha'),
(919, 'mantelpiece', 'kandallópárkány'),
(920, 'to capture', 'zsákmányol'),
(921, 'capture', 'zsákmány'),
(922, 'to be aware ofsingular', 'tudatában van vminek'),
(923, 'to maintain', 'fenntart'),
(924, 'to mean no harm', 'nem akar rosszat'),
(925, 'claw', 'karom'),
(926, 'to get confused', 'összekeveredik'),
(927, 'to utter a roar', 'üvöltést hallat'),
(928, 'to bark', 'ugat'),
(929, 'to enrage', 'felbőszít'),
(930, 'to turn over', 'felborít'),
(931, 'to bewilder', 'megzavar'),
(932, 'chaos', 'káosz'),
(933, 'useless', 'hiábavaló'),
(934, 'to miss', 'elvét'),
(935, 'puzzle', 'rejtvény'),
(936, 'to puzzle', 'zavarba hoz'),
(937, 'for god\'s sake!', 'az isten szerelmére!'),
(938, 'by the grace of god', 'isten kegyelméből'),
(939, 'death-trap', 'veszélyes hely'),
(940, 'to defend', 'megvéd'),
(941, 'to restore', 'visszaad'),
(942, 'utmost', 'legtávolabbi'),
(943, 'limp', 'bicegés'),
(944, 'to limp', 'biceg'),
(945, 'to envelop', 'beburkol'),
(946, 'envelope', 'boríték'),
(947, 'bandage', 'kötés'),
(948, 'to bandage', 'bekötöz'),
(949, 'to take the trouble to dosingular', 'veszi a fáradságot vmihez'),
(950, 'to round up', 'összegyűjt'),
(951, 'scholar', 'tudós'),
(952, 'order', 'rend'),
(953, 'commissioner', 'megbízott'),
(954, 'to erect', 'feláll'),
(955, 'subjugation', 'leigázás'),
(956, 'sketch', 'vázlat'),
(957, 'to sketch', 'vázol'),
(958, 'immortal', 'halhatatlan'),
(959, 'to circumnavigate', 'körülhajóz'),
(960, 'ally', 'szövetséges'),
(961, 'to ally', 'összeköt'),
(962, 'borough', 'város'),
(963, 'to defeat', 'legyőz'),
(964, 'pseudonym', 'álnév'),
(965, 'conspiracy', 'összeesküvés'),
(966, 'bondage', 'jobbágyság'),
(967, 'veil', 'fátyol'),
(968, 'to veil', 'lefátyoloz'),
(969, 'treason', 'árulás'),
(970, 'high treason', 'felségárulás'),
(971, 'siege', 'ostrom'),
(972, 'to kidnap', 'elhurcol'),
(973, 'pauper', 'szegény'),
(974, 'poor', 'szegény'),
(975, 'one\'s turn comes', 'sorra kerül'),
(976, 'to mail a letter', 'levelet küld'),
(977, 'to send a letter', 'leveled küld'),
(978, 'to post a letter', 'felad egy levelet'),
(979, 'to bother withsingular', 'vesződik valamivel'),
(980, 'heavens!', 'te jó ég!'),
(981, 'special delivery', 'expressz levél'),
(982, 'to slam the door', 'bevágja az ajtót'),
(983, 'we are even', 'kvittek vagyunk'),
(984, 'beforehand', 'előzőleg'),
(985, 'peel', 'héj'),
(986, 'to peel', 'meghámoz'),
(987, 'school of thought', 'felfogás'),
(988, 'concerning', 'vonatkozólag'),
(989, 'to hold on tosingular', 'ragaszkodik vmihez'),
(990, 'fortune', 'szerencse'),
(991, 'definitely', 'feltétlenül'),
(992, 'to accuse sy ofsingular', 'megvádol vkit vmivel'),
(993, 'shrewd', 'okos'),
(994, 'tight', 'fukar'),
(995, 'satchel', 'iskolatáska'),
(996, 'ox', 'ökör'),
(997, 'blink', 'pislogás'),
(998, 'to blink', 'pislog'),
(999, 'to get the best of sy', 'legyőz vkit'),
(1000, 'terms', 'feltételek');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
