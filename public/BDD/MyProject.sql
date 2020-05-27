-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mer. 27 mai 2020 à 21:49
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `MyProject`
--

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `id_timelinecard` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `description2` varchar(255) DEFAULT NULL,
  `heure` varchar(255) DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `img_blob` longtext DEFAULT NULL,
  `poste_le` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `title2` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id_message` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `objet` varchar(255) DEFAULT NULL,
  `pseudo` varchar(255) DEFAULT NULL,
  `texte` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

CREATE TABLE `publication` (
  `id_publication` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `description2` varchar(255) DEFAULT NULL,
  `heure` varchar(255) DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `img_blob` longtext DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `poste_le` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `title2` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id_question` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `repondu` bit(1) NOT NULL,
  `texte` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `id_utilisateur` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `question_reponse`
--

CREATE TABLE `question_reponse` (
  `id_question` int(11) NOT NULL,
  `id_reponse` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `reponse`
--

CREATE TABLE `reponse` (
  `id_reponse` int(11) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `id_question` int(11) NOT NULL,
  `login_user` varchar(255) DEFAULT NULL,
  `pseudo` varchar(255) DEFAULT NULL,
  `texte` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id_role` bigint(20) NOT NULL,
  `description_role` varchar(255) DEFAULT NULL,
  `nom_role` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`id_role`, `description_role`, `nom_role`) VALUES
(1, 'ROLE_ADMIN', 'ROLE_ADMIN'),
(2, 'ROLE_USER', 'ROLE_USER');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id_utilisateur` int(11) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `date_inscription` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `img_blob` longtext DEFAULT NULL,
  `is_adherent` bit(1) NOT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nbenfant` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `pseudo` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id_utilisateur`, `adresse`, `date_inscription`, `description`, `image`, `img_blob`, `is_adherent`, `login`, `nbenfant`, `nom`, `password`, `prenom`, `pseudo`) VALUES
(1, NULL, '27-05-2020', NULL, NULL, NULL, b'0', 'admin@gmail.com', NULL, NULL, '$2a$10$qV1lqf9Jn1w/bLmb1c3UEuwR0hAdfiB7cbKj9CCCzd1pbJnl.1UBi', NULL, NULL),
(2, NULL, '27-05-2020', NULL, NULL, NULL, b'0', 'user01@gmail.com', NULL, NULL, '$2a$10$/Nvqs0THxUzrzHLGpb0dsO0ZTB0wRrYkLgnIErTPtV8mHQvtd4UBK', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur_role`
--

CREATE TABLE `utilisateur_role` (
  `fk_utilisateur_id` int(11) NOT NULL,
  `fk_role_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur_role`
--

INSERT INTO `utilisateur_role` (`fk_utilisateur_id`, `fk_role_id`) VALUES
(1, 1),
(2, 2),
(1, 1),
(2, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`id_timelinecard`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_message`);

--
-- Index pour la table `publication`
--
ALTER TABLE `publication`
  ADD PRIMARY KEY (`id_publication`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id_question`),
  ADD KEY `FKt6cuehm0838w1i594ff1cax01` (`id_utilisateur`);

--
-- Index pour la table `question_reponse`
--
ALTER TABLE `question_reponse`
  ADD UNIQUE KEY `UK_ji2hkeiy0wfch1jmxcmcbej1t` (`id_reponse`),
  ADD KEY `FKgcn0svt95hwd9g3w73n2ussos` (`id_question`);

--
-- Index pour la table `reponse`
--
ALTER TABLE `reponse`
  ADD PRIMARY KEY (`id_reponse`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id_utilisateur`);

--
-- Index pour la table `utilisateur_role`
--
ALTER TABLE `utilisateur_role`
  ADD KEY `FKg3uh4lqhhea5j44diaev5wiev` (`fk_role_id`),
  ADD KEY `FK9mqcvrt14kgr2vsc4iep69vvq` (`fk_utilisateur_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `id_timelinecard` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id_message` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `publication`
--
ALTER TABLE `publication`
  MODIFY `id_publication` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id_question` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `reponse`
--
ALTER TABLE `reponse`
  MODIFY `id_reponse` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id_role` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id_utilisateur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
