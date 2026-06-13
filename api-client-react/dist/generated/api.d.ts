import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { DebateInput, DebateResult, DebateSession, ErrorResponse, HealthStatus } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getStartDebateUrl: () => string;
/**
 * Sends a prompt to GPT, Claude, and Gemini simultaneously.
Each model provides an initial response, then critiques the others,
and finally a synthesized best answer is produced.

 * @summary Start a multi-AI debate
 */
export declare const startDebate: (debateInput: DebateInput, options?: RequestInit) => Promise<DebateResult>;
export declare const getStartDebateMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof startDebate>>, TError, {
        data: BodyType<DebateInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof startDebate>>, TError, {
    data: BodyType<DebateInput>;
}, TContext>;
export type StartDebateMutationResult = NonNullable<Awaited<ReturnType<typeof startDebate>>>;
export type StartDebateMutationBody = BodyType<DebateInput>;
export type StartDebateMutationError = ErrorType<ErrorResponse>;
/**
* @summary Start a multi-AI debate
*/
export declare const useStartDebate: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof startDebate>>, TError, {
        data: BodyType<DebateInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof startDebate>>, TError, {
    data: BodyType<DebateInput>;
}, TContext>;
export declare const getListDebateSessionsUrl: () => string;
/**
 * Returns recent debate sessions with prompt and synthesis preview
 * @summary List past debate sessions
 */
export declare const listDebateSessions: (options?: RequestInit) => Promise<DebateSession[]>;
export declare const getListDebateSessionsQueryKey: () => readonly ["/api/debate/sessions"];
export declare const getListDebateSessionsQueryOptions: <TData = Awaited<ReturnType<typeof listDebateSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDebateSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listDebateSessions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListDebateSessionsQueryResult = NonNullable<Awaited<ReturnType<typeof listDebateSessions>>>;
export type ListDebateSessionsQueryError = ErrorType<unknown>;
/**
 * @summary List past debate sessions
 */
export declare function useListDebateSessions<TData = Awaited<ReturnType<typeof listDebateSessions>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listDebateSessions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetDebateSessionUrl: (id: number) => string;
/**
 * Returns the full debate result for a given session
 * @summary Get a specific debate session
 */
export declare const getDebateSession: (id: number, options?: RequestInit) => Promise<DebateSession>;
export declare const getGetDebateSessionQueryKey: (id: number) => readonly [`/api/debate/sessions/${number}`];
export declare const getGetDebateSessionQueryOptions: <TData = Awaited<ReturnType<typeof getDebateSession>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDebateSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDebateSession>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDebateSessionQueryResult = NonNullable<Awaited<ReturnType<typeof getDebateSession>>>;
export type GetDebateSessionQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a specific debate session
 */
export declare function useGetDebateSession<TData = Awaited<ReturnType<typeof getDebateSession>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDebateSession>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map