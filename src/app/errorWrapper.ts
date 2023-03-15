import { Summoner } from "./summoner";
import { Recommendation } from "./recommendation";
import { HMError } from "./error";

export interface ErrorWrapper{
    body: any,
    error: HMError | null 
}