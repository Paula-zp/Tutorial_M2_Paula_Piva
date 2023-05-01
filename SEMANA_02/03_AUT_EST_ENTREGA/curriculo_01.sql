BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "usuario" (
	"id"	INTEGER NOT NULL UNIQUE,
	"nome"	TEXT NOT NULL,
	"foto"	BLOB NOT NULL,
	"cargo"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "formacao" (
	"id"	INTEGER NOT NULL,
	"usuario_id"	INTEGER NOT NULL,
	"curso"	TEXT NOT NULL,
	"ano_inicial"	INTEGER NOT NULL,
	"ano_final"	INTEGER NOT NULL,
	"descricao"	TEXT NOT NULL,
	FOREIGN KEY("usuario_id") REFERENCES "usuario"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "personalidade" (
	"id"	INTEGER NOT NULL,
	"usuario_id"	INTEGER NOT NULL,
	"caracteristica"	TEXT NOT NULL,
	"nivel"	INTEGER NOT NULL,
	FOREIGN KEY("usuario_id") REFERENCES "usuario"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "informacoes" (
	"id"	INTEGER NOT NULL,
	"id_usuario"	INTEGER NOT NULL,
	"localizacao"	TEXT NOT NULL,
	"celular"	INTEGER NOT NULL,
	"email"	TEXT NOT NULL,
	"descricao"	TEXT NOT NULL,
	FOREIGN KEY("id_usuario") REFERENCES "usuario"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"id"	INTEGER NOT NULL,
	"usuario_id"	INTEGER NOT NULL,
	"habilidade"	TEXT NOT NULL,
	"nivel"	INTEGER NOT NULL,
	FOREIGN KEY("usuario_id") REFERENCES "usuario"("id"),
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"id"	INTEGER NOT NULL,
	"usuario_id"	INTEGER NOT NULL,
	"empresa"	TEXT NOT NULL,
	"ano_inicial"	INTEGER NOT NULL,
	"ano_final"	INTEGER NOT NULL,
	"cargo"	TEXT NOT NULL,
	"descricao"	TEXT NOT NULL,
	FOREIGN KEY("usuario_id") REFERENCES "usuario"("id"),
	PRIMARY KEY("id")
);
COMMIT;
