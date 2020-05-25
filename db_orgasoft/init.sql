CREATE TABLE `membergroup` (
  `id` int,
  `membergroup` varchar(50)
);

CREATE TABLE `memberitemamount` (
  `id` int,
  `memberId` int,
  `inventoryitemId` int,
  `amount` int,
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `qualification` (
  `id` int,
  `qualification` varchar(50),
  `description` text(65535)
);

CREATE TABLE `position` (
  `id` int,
  `position` varchar(50)
);

CREATE TABLE `status` (
  `id` int,
  `status` varchar(50)
);

CREATE TABLE `member` (
  `id` int,
  `addressId` int,
  `positionId` int,
  `statusId` int,
  `membergroupId` int,
  `title` varchar(150),
  `firstName` varchar(255),
  `lastName` varchar(255),
  `phoneMobile` varchar(50),
  `phoneHome` varchar(50),
  `email` varchar(255),
  `gender` varchar(20),
  `birthday` date,
  `note` text(65535),
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `incomebudget` (
  `id` int,
  `incomebudget` varchar(50),
  `amount` float
);

CREATE TABLE `address` (
  `id` int,
  `cityId` int,
  `street` varchar(255),
  `streetNumber` varchar(20),
  `note` text(65535),
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `city` (
  `id` int,
  `city` varchar(150),
  `postcode` varchar(30),
  `state` varchar(150),
  `country` varchar(150),
  `countryCode` varchar(10)
);

CREATE TABLE `expensebudget` (
  `id` int,
  `expensebudget` varchar(50),
  `amount` float
);

CREATE TABLE `memberqualification` (
  `id` int,
  `memberId` int,
  `qualificationId` int,
  `date` date,
  `passed` tinyint
);

CREATE TABLE `inventorygroup` (
  `id` int,
  `inventorygroup` varchar(50)
);

CREATE TABLE `expensetype` (
  `id` int,
  `expensetype` varchar(50)
);

CREATE TABLE `currency` (
  `id` int,
  `currency` varchar(50),
  `exchangeRate` float,
  `currencyCode` varchar(10)
);

CREATE TABLE `income` (
  `id` int,
  `memberId` int,
  `currencyId` int,
  `incometypeId` int,
  `income` varchar(50),
  `amount` float,
  `dateRecieved` date,
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `expense` (
  `id` int,
  `memberId` int,
  `expensetypeId` int,
  `currencyId` int,
  `expense` varchar(50),
  `amount` float,
  `dateSpend` date,
  `createdAt` date,
  `updatedAt` date
);

CREATE TABLE `incometype` (
  `id` int,
  `incometype` varchar(50)
);

CREATE TABLE `inventoryplace` (
  `id` int,
  `inventoryplace` varchar(50)
);

CREATE TABLE `inventoryitem` (
  `id` int,
  `inventorygroupId` int,
  `expenseId` int,
  `inventoryplaceId` int,
  `inventoryitem` varchar(255),
  `description` text(65535),
  `createdAt` date,
  `updatedAt` date
);

