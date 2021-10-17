CREATE TABLE HO_DV (
	ma_ho int PRIMARY KEY AUTO_INCREMENT,
  ten_ho varchar(128) NOT NULL
);

CREATE TABLE DONG_VAT (
	ma_dv int PRIMARY KEY AUTO_INCREMENT,
  ten_dv varchar(128) NOT NULL,
  mo_ta varchar(1000),
  dia_diem varchar(256),
  ma_ho int NOT NULL,
  FOREIGN KEY (ma_ho) REFERENCES HO_DV(ma_ho)
);

CREATE TABLE ANH_DV (
	ma_anh int PRIMARY KEY AUTO_INCREMENT,
  lien_ket varchar(1000) NOT NULL,
  ma_dv int NOT NULL,
  FOREIGN KEY (ma_dv) REFERENCES DONG_VAT(ma_dv)
);