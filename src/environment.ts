/**
 * Get environment variable
 *
 * @param name The name of the environment variable
 * @param throwOrDefaultValue If true will throw an error if the environment variable is not set, if
 *                            string then it returns a default if ENV var is not set
 */
export function ENV(name: string, throwOrDefaultValue: boolean | string = true): string {
    const env = process.env[name];
    if (throwOrDefaultValue === true && env === undefined) {
        throw new Error(`Environment variable ${name} not set`);
    } else if (typeof throwOrDefaultValue === "string" && env === undefined) {
        return throwOrDefaultValue;
    }
    return env as string;
}
