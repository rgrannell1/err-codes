
"use strict"





const constants = {
	libuvErrorMap: [
		{
			code: 'E2BIG',
			message: "argument list too long"
		},
		{
			code: 'EACCES',
			message: "permission denied"
		},
		{
			code: 'EADDRINUSE',
			message: "address already in use"
		},
		{
			code: 'EADDRNOTAVAIL',
			message: "address not available"
		},
		{
			code: 'EAFNOSUPPORT',
			message: "address family not supported"
		},
		{
			code: 'EAGAIN',
			message: "resource temporarily unavailable"
		},
		{
			code: 'EAI_ADDRFAMILY',
			message: "address family not supported"
		},
		{
			code: 'EAI_AGAIN',
			message: "temporary failure"
		},
		{
			code: 'EAI_BADFLAGS',
			message: "bad ai_flags value"
		},
		{
			code: 'EAI_BADHINTS',
			message: "invalid value for hints"
		},
		{
			code: 'EAI_CANCELED',
			message: "request canceled"
		},
		{
			code: 'EAI_FAIL',
			message: "permanent failure"
		},
		{
			code: 'EAI_FAMILY',
			message: "ai_family not supported"
		},
		{
			code: 'EAI_MEMORY',
			message: "out of memory"
		},
		{
			code: 'EAI_NODATA',
			message: "no address"
		},
		{
			code: 'EAI_NONAME',
			message: "unknown node or service"
		},
		{
			code: 'EAI_OVERFLOW',
			message: "argument buffer overflow"
		},
		{
			code: 'EAI_PROTOCOL',
			message: "resolved protocol is unknown"
		},
		{
			code: 'EAI_SERVICE',
			message: "service not available for socket type"
		},
		{
			code: 'EAI_SOCKTYPE',
			message: "socket type not supported"
		},
		{
			code: 'EALREADY',
			message: "connection already in progress"
		},
		{
			code: 'EBADF',
			message: "bad file descriptor"
		},
		{
			code: 'EBUSY',
			message: "resource busy or locked"
		},
		{
			code: 'ECANCELED',
			message: "operation canceled"
		},
		{
			code: 'ECHARSET',
			message: "invalid Unicode character"
		},
		{
			code: 'ECONNABORTED',
			message: "software caused connection abort"
		},
		{
			code: 'ECONNREFUSED',
			message: "connection refused"
		},
		{
			code: 'ECONNRESET',
			message: "connection reset by peer"
		},
		{
			code: 'EDESTADDRREQ',
			message: "destination address required"
		},
		{
			code: 'EEXIST',
			message: "file already exists"
		},
		{
			code: 'EFAULT',
			message: "bad address in system call argument"
		},
		{
			code: 'EFBIG',
			message: "file too large"
		},
		{
			code: 'EHOSTUNREACH',
			message: "host is unreachable"
		},
		{
			code: 'EINTR',
			message: "interrupted system call"
		},
		{
			code: 'EINVAL',
			message: "invalid argument"
		},
		{
			code: 'EIO',
			message: "i/o error"
		},
		{
			code: 'EISCONN',
			message: "socket is already connected"
		},
		{
			code: 'EISDIR',
			message: "illegal operation on a directory"
		},
		{
			code: 'ELOOP',
			message: "too many symbolic links encountered"
		},
		{
			code: 'EMFILE',
			message: "too many open files"
		},
		{
			code: 'EMSGSIZE',
			message: "message too long"
		},
		{
			code: 'ENAMETOOLONG',
			message: "name too long"
		},
		{
			code: 'ENETDOWN',
			message: "network is down"
		},
		{
			code: 'ENETUNREACH',
			message: "network is unreachable"
		},
		{
			code: 'ENFILE',
			message: "file table overflow"
		},
		{
			code: 'ENOBUFS',
			message: "no buffer space available"
		},
		{
			code: 'ENODEV',
			message: "no such device"
		},
		{
			code: 'ENOENT',
			message: "no such file or directory"
		},
		{
			code: 'ENOMEM',
			message: "not enough memory"
		},
		{
			code: 'ENONET',
			message: "machine is not on the network"
		},
		{
			code: 'ENOPROTOOPT',
			message: "protocol not available"
		},
		{
			code: 'ENOSPC',
			message: "no space left on device"
		},
		{
			code: 'ENOSYS',
			message: "function not implemented"
		},
		{
			code: 'ENOTCONN',
			message: "socket is not connected"
		},
		{
			code: 'ENOTDIR',
			message: "not a directory"
		},
		{
			code: 'ENOTEMPTY',
			message: "directory not empty"
		},
		{
			code: 'ENOTSOCK',
			message: "socket operation on non-socket"
		},
		{
			code: 'ENOTSUP',
			message: "operation not supported on socket"
		},
		{
			code: 'EPERM',
			message: "operation not permitted"
		},
		{
			code: 'EPIPE',
			message: "broken pipe"
		},
		{
			code: 'EPROTO',
			message: "protocol error"
		},
		{
			code: 'EPROTONOSUPPORT',
			message: "protocol not supported"
		},
		{
			code: 'EPROTOTYPE',
			message: "protocol wrong type for socket"
		},
		{
			code: 'ERANGE',
			message: "result too large"
		},
		{
			code: 'EROFS',
			message: "read-only file system"
		},
		{
			code: 'ESHUTDOWN',
			message: "cannot send after transport endpoint shutdown"
		},
		{
			code: 'ESPIPE',
			message: "invalid seek"
		},
		{
			code: 'ESRCH',
			message: "no such process"
		},
		{
			code: 'ETIMEDOUT',
			message: "connection timed out"
		},
		{
			code: 'ETXTBSY',
			message: "text file is busy"
		},
		{
			code: 'EXDEV',
			message: "cross-device link not permitted"
		},
		{
			code: 'UNKNOWN',
			message: "unknown error"
		},
		{
			code: 'EOF',
			message: "end of file"
		},
		{
			code: 'ENXIO',
			message: "no such device or address"
		},
		{
			code: 'EMLINK',
			message: "too many links"
		},
		{
			code: 'EHOSTDOWN',
			message: "host is down"
		}
	]
	.map((error, number) => {

		error.number = number
		return error

	})
}






exports.numbers = constants.libuvErrorMap
exports.codes   = { }





constants.libuvErrorMap.forEach(error => {
	exports.codes[error.code] = error
})
