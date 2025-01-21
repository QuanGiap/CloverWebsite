import jwt from 'jsonwebtoken';
import './envConfig.ts';
interface verifyTokenInterface {
    err: jwt.VerifyErrors | null;
    decoded: string| jwt.JwtPayload | undefined;
}
const verifyToken = async (token: string) => {
    const result = await verifyAsync(token);
    return result;
};
export default verifyToken;

async function verifyAsync(token: string) {
    return await new Promise<verifyTokenInterface>((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
            return resolve({ err, decoded });
        });
    })
}