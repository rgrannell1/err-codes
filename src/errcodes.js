
"use strict"





const constants = {
	libuvErrorMap: [
		{
			code: 'E2BIG',
			message: "argument list too long",
			aliases: [
				'tooManyArguments'
			]
		},
		{
			code: 'EACCES',
			message: "permission denied",
			aliases: [
				'permissionDenied'
			]
		},
		{
			code: 'EADDRINUSE',
			message: "address already in use",
			aliases: [
				'addressIsUsed'
			]
		},
		{
			code: 'EADDRNOTAVAIL',
			message: "address not available",
			aliases: [
				'addressNotAvailable'
			]
		},
		{
			code: 'EAFNOSUPPORT',
			message: "address family not supported",
			aliases: [
				'addressFamilyNotSupported'
			]
		},
		{
			code: 'EAGAIN',
			message: "resource temporarily unavailable",
			aliases: [
				'resourceTemporarilyUnavailable'
			]
		},
		{
			code: 'EAI_ADDRFAMILY',
			message: "address family not supported",
			aliases: [
				'addressFamilyAlsoNotSupported'
			]
		},
		{
			code: 'EAI_AGAIN',
			message: "temporary failure",
			aliases: [
				'temporaryFailure'
			]
		},
		{
			code: 'EAI_BADFLAGS',
			message: "bad ai_flags value",
			aliases: [
				'badAiFlags'
			]
		},
		{
			code: 'EAI_BADHINTS',
			message: "invalid value for hints",
			aliases: [
				'invalidHints'
			]
		},
		{
			code: 'EAI_CANCELED',
			message: "request canceled",
			aliases: [
				'requestCancelled'
			]
		},
		{
			code: 'EAI_FAIL',
			message: "permanent failure",
			aliases: [
				'permententFailure'
			]
		},
		{
			code: 'EAI_FAMILY',
			message: "ai_family not supported",
			aliases: [
				'aiFamilyNotSupported'
			]
		},
		{
			code: 'EAI_MEMORY',
			message: "out of memory",
			aliases: [
				'outOfMemory'
			]
		},
		{
			code: 'EAI_NODATA',
			message: "no address",
			aliases: [
				'noAddress'
			]
		},
		{
			code: 'EAI_NONAME',
			message: "unknown node or service",
			aliases: [
				'unknownNodeOrService'
			]
		},
		{
			code: 'EAI_OVERFLOW',
			message: "argument buffer overflow",
			aliases: [
				'argumentBufferOverflow'
			]
		},
		{
			code: 'EAI_PROTOCOL',
			message: "resolved protocol is unknown",
			aliases: [
				'unknownProtocol'
			]
		},
		{
			code: 'EAI_SERVICE',
			message: "service not available for socket type",
			aliases: [
				'socketServiceUnavailable'
			]
		},
		{
			code: 'EAI_SOCKTYPE',
			message: "socket type not supported",
			aliases: [
				'socketTypeNotSupported'
			]
		},
		{
			code: 'EALREADY',
			message: "connection already in progress",
			aliases: [
				'connectionInProgress'
			]
		},
		{
			code: 'EBADF',
			message: "bad file descriptor",
			aliases: [
				'badFileDescriptor'
			]
		},
		{
			code: 'EBUSY',
			message: "resource busy or locked",
			aliases: [
				'resourceBusy'
			]
		},
		{
			code: 'ECANCELED',
			message: "operation canceled",
			aliases: [
				'operationCancelled'
			]
		},
		{
			code: 'ECHARSET',
			message: "invalid Unicode character",
			aliases: [
				'invalidUnicodeCharacter'
			]
		},
		{
			code: 'ECONNABORTED',
			message: "software caused connection abort",
			aliases: [
				'connectionAborted'
			]
		},
		{
			code: 'ECONNREFUSED',
			message: "connection refused",
			aliases: [
				'connectionRefused'
			]
		},
		{
			code: 'ECONNRESET',
			message: "connection reset by peer",
			aliases: [
				'connectionReset'
			]
		},
		{
			code: 'EDESTADDRREQ',
			message: "destination address required",
			aliases: [
				'destinationAddressRequired'
			]
		},
		{
			code: 'EEXIST',
			message: "file already exists",
			aliases: [
				'fileExists'
			]
		},
		{
			code: 'EFAULT',
			message: "bad address in system call argument",
			aliases: [
				'badSystemCallAddress'
			]
		},
		{
			code: 'EFBIG',
			message: "file too large",
			aliases: [
				'fileTooLarge'
			]
		},
		{
			code: 'EHOSTUNREACH',
			message: "host is unreachable",
			aliases: [
				'hostUnreachable'
			]
		},
		{
			code: 'EINTR',
			message: "interrupted system call",
			aliases: [
				'interruptedSystemCall'
			]
		},
		{
			code: 'EINVAL',
			message: "invalid argument",
			aliases: [
				'invalidArgument'
			]
		},
		{
			code: 'EIO',
			message: "i/o error",
			aliases: [
				'ioError'
			]
		},
		{
			code: 'EISCONN',
			message: "socket is already connected",
			aliases: [
				'socketConnected'
			]
		},
		{
			code: 'EISDIR',
			message: "illegal operation on a directory",
			aliases: [
				'illegalDirectoryOperation'
			]
		},
		{
			code: 'ELOOP',
			message: "too many symbolic links encountered",
			aliases: [
				'tooManySymlinks'
			]
		},
		{
			code: 'EMFILE',
			message: "too many open files",
			aliases: [
				'tooManyOpenFiles'
			]
		},
		{
			code: 'EMSGSIZE',
			message: "message too long",
			aliases: [
				'messageOpen'
			]
		},
		{
			code: 'ENAMETOOLONG',
			message: "name too long",
			aliases: [
				'nameTooLong'
			]
		},
		{
			code: 'ENETDOWN',
			message: "network is down",
			aliases: [
				'networkDown'
			]
		},
		{
			code: 'ENETUNREACH',
			message: "network is unreachable",
			aliases: [
				'networkUnreachable'
			]
		},
		{
			code: 'ENFILE',
			message: "file table overflow",
			aliases: [
				'fileTableOverflow'
			]
		},
		{
			code: 'ENOBUFS',
			message: "no buffer space available",
			aliases: [
				'noBufferSpace'
			]
		},
		{
			code: 'ENODEV',
			message: "no such device",
			aliases: [
				'noSuchDevice'
			]
		},
		{
			code: 'ENOENT',
			message: "no such file or directory",
			aliases: [
				'noSuchFileOrDictectory'
			]
		},
		{
			code: 'ENOMEM',
			message: "not enough memory",
			aliases: [
				'notEnoughMemory'
			]
		},
		{
			code: 'ENONET',
			message: "machine is not on the network",
			aliases: [
				'machineNotOnNetwork'
			]
		},
		{
			code: 'ENOPROTOOPT',
			message: "protocol not available",
			aliases: [
				'protocolNotAvailable'
			]
		},
		{
			code: 'ENOSPC',
			message: "no space left on device",
			aliases: [
				'noSpaceLeft'
			]
		},
		{
			code: 'ENOSYS',
			message: "function not implemented",
			aliases: [
				'functionNotImplemented'
			]
		},
		{
			code: 'ENOTCONN',
			message: "socket is not connected",
			aliases: [
				'socketNotConnected'
			]
		},
		{
			code: 'ENOTDIR',
			message: "not a directory",
			aliases: [
				'notADirectory'
			]
		},
		{
			code: 'ENOTEMPTY',
			message: "directory not empty",
			aliases: [
				'directoryNotEmpty'
			]
		},
		{
			code: 'ENOTSOCK',
			message: "socket operation on non-socket",
			aliases: [
				'nonSocketSocketOperation'
			]
		},
		{
			code: 'ENOTSUP',
			message: "operation not supported on socket",
			aliases: [
				'notSocketOperation'
			]
		},
		{
			code: 'EPERM',
			message: "operation not permitted",
			aliases: [
				'opeationNotPermitted'
			]
		},
		{
			code: 'EPIPE',
			message: "broken pipe",
			aliases: [
				'brokenPipe'
			]
		},
		{
			code: 'EPROTO',
			message: "protocol error",
			aliases: [
				'protocolError'
			]
		},
		{
			code: 'EPROTONOSUPPORT',
			message: "protocol not supported",
			aliases: [
				'protocolNotSupported'
			]
		},
		{
			code: 'EPROTOTYPE',
			message: "protocol wrong type for socket",
			aliases: [
				'wrongSocketPrototype'
			]
		},
		{
			code: 'ERANGE',
			message: "result too large",
			aliases: [
				'resultTooLarge'
			]
		},
		{
			code: 'EROFS',
			message: "read-only file system",
			aliases: [
				'readOnlyFileSystem'
			]
		},
		{
			code: 'ESHUTDOWN',
			message: "cannot send after transport endpoint shutdown",
			aliases: [
				'sentAfterTransportEndpointShutdown'
			]
		},
		{
			code: 'ESPIPE',
			message: "invalid seek",
			aliases: [
				'invalidSeeks'
			]
		},
		{
			code: 'ESRCH',
			message: "no such process",
			aliases: [
				'noSuchProcess'
			]
		},
		{
			code: 'ETIMEDOUT',
			message: "connection timed out",
			aliases: [
				'connectionTimedOut'
			]
		},
		{
			code: 'ETXTBSY',
			message: "text file is busy",
			aliases: [
				'textFileBusy'
			]
		},
		{
			code: 'EXDEV',
			message: "cross-device link not permitted",
			aliases: [
				'crossDeviceLinkNotPermitted'
			]
		},
		{
			code: 'UNKNOWN',
			message: "unknown error",
			aliases: [
				'unknown'
			]
		},
		{
			code: 'EOF',
			message: "end of file",
			aliases: [
				'endOfFile'
			]
		},
		{
			code: 'ENXIO',
			message: "no such device or address",
			aliases: [
				'notSuchDeviceOrAddress'
			]
		},
		{
			code: 'EMLINK',
			message: "too many links",
			aliases: [
				'tooManyLinks'
			]
		},
		{
			code: 'EHOSTDOWN',
			message: "host is down",
			aliases: [
				'hostIsDown'
			]
		}
	]
	.map((error, number) => {

		error.number = number
		return error

	})
}






exports.numbers = constants.libuvErrorMap
exports.codes   = { }
exports.aliases = { }





constants.libuvErrorMap.forEach(error => {
	exports.codes[error.code] = error
})

constants.libuvErrorMap.forEach(error => {
	error.aliases.forEach(alias => {
		exports.aliases[alias] = error
	})
})





console.log(exports.numbers[67])
