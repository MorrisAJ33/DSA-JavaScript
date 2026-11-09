function withExecutionTime(fn) {
    if (typeof fn !== 'function') {
        throw new TypeError('Argument must be a function');
    }

    return async function (...args) {
        const start = performance.now();
        let result;

        try {
            // Support both sync and async functions
            result = fn.apply(this, args);
            if (result instanceof Promise) {
                result = await result;
            }
        } catch (error) {
            console.error(`Function threw an error: ${error.message}`);
            throw error;
        } finally {
            const end = performance.now();
            console.log(`Execution time: ${(end - start).toFixed(3)} ms`);
        }

        return result;
    };
}