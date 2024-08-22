declare namespace NodeJS {
	export interface ProcessEnv extends Dict<string> {
	  PROJECT_NAME ?: string;
	  HTTP_PORT ?: string;
	}
}
