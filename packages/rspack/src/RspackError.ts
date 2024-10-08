import type * as binding from "@rspack/binding";
import { concatErrorMsgAndStack } from "./util";

export type RspackError = binding.JsRspackError;

export class JsRspackDiagnostic {
	static __to_binding(
		error: Error | RspackError,
		severity: binding.JsRspackSeverity
	): binding.JsRspackDiagnostic {
		return {
			error: concatErrorMsgAndStack(error),
			severity
		};
	}
}

export class NonErrorEmittedError extends Error {
	constructor(error: Error) {
		super();
		this.name = "NonErrorEmittedError";
		this.message = `(Emitted value instead of an instance of Error) ${error}`;
	}
}
