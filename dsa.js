import { Readable, Stream, Transform } from 'stream';
import { signal } from '/signal';
import { transcode } from 'buffer';

export function createReadableStream(str) {
    // your solution

    if(!str) return new Error("Cannot be empty")
    

        let x = '0';

        x = Number(x)
        const rStream = new Readable({
            read(){
                if(x < str.length)
                {
                    this.push(str[x])
                    x++;
                }
                else 
                {
                    this.push('')

                }
            }
        })

        return rStream
}

export function createTransformStream() {
    // your solution
}

export function createStreamablePipeline(str) {
    // your solution
}



export function createReadableStream(str) {
 
    let index = 0;

    const readableStream = new Readable({
        read() {
            if (index < str.length) {
                this.push(str[index]); // Push one character at a time.
                index++;
            } else {
                this.push(null); // Signal the end of the stream.
            }
        },
    });

    return readableStream;
}


function createReadableStream(str) {
    if (!str || typeof str !== 'string') {
        throw new Error('Input must be a non-empty string.');
    }

    const emitted = new Set();  
    let index = 0;

    const readableStream = new Readable({
        read() {
            if (index < str.length) {
                const char = str[index++];
                this.push(char); 
            } else {
                this.push(null); 
            }
        },
    });

    const originalPush = readableStream.push.bind(readableStream);
    readableStream.push = (chunk) => {
        if (!chunk) return originalPush(chunk);
        const char = chunk.toString();
        if (emitted.has(char)) {
            signal('duplicate', char);
        } else {
            signal('received', char);
            emitted.add(char);
        }
        return originalPush(chunk);
    };

    return readableStream;
}
function createTransformStream() {
    return new Transform({
        transform(chunk, encoding, callback) {
            const char = chunk.toString();
            if (char.match(/[a-zA-Z]/)) {
                const transformedChar = char.toUpperCase();
                signal('transform', transformedChar);
                callback(null, transformedChar);
            } else {
                signal('invalid', char);
                callback(); // Skip invalid characters
            }
        },
    });
}

function createPipeline(str) {
    const readableStream = createReadableStream(str);
    const transformStream = createTransformStream();

    pipeline(readableStream, transformStream, (err) => {
        if (err) {
            console.error('Pipeline error:', err);
        }
    });

    return { readableStream, transformStream };
}