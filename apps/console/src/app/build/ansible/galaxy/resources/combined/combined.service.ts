import { AlertService } from './../../../../../core/alert/alert.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
    PaginatedRepoCollection,
    RepoOrCollectionResponse,
    PaginatedCombinedSearch,
} from './combined';

import { ServiceBase } from '../base/service-base';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class RepoCollectionListService extends ServiceBase {
    constructor(http: HttpClient, alertService: AlertService) {
        super(
            http,
            alertService,
            '/api/internal/ui/repos-and-collections/',
            'collection',
        );
    }

    query(params): Observable<PaginatedRepoCollection> {
        return this.http
            .get<PaginatedRepoCollection>(this.url, { params: params })
            .pipe(
                tap(_ => this.log('fetched collection and repository list')),
                catchError(
                    this.handleError('Get', {} as PaginatedRepoCollection),
                ),
            );
    }
}

@Injectable({
    providedIn: 'root'
  })
export class RepoCollectionSearchService extends ServiceBase {
    LOWER_CASE_PARAMS = [
        'namespaces',
        'tags',
        'contributor_type',
        'deprecated',
        'type',
    ];

    constructor(http: HttpClient, alertService: AlertService) {
        super(
            http,
            alertService,
            '/api/internal/ui/search/',
            'collection',
        );
    }

    query(params): Observable<PaginatedCombinedSearch> {
        for (const k of this.LOWER_CASE_PARAMS) {
            if (params[k]) {
                params[k] = params[k].toLowerCase();
            }
        }
        return this.http
            .get<PaginatedCombinedSearch>(this.url, { params: params })
            .pipe(
                tap(_ => this.log('search repos and collections')),
                catchError(
                    this.handleError('Get', {} as PaginatedCombinedSearch),
                ),
            );
    }
}

@Injectable({
    providedIn: 'root'
  })
export class RepoOrCollectionService extends ServiceBase {
    constructor(http: HttpClient, alertService: AlertService) {
        super(
            http,
            alertService,
            '/api/internal/ui/repo-or-collection-detail/',
            'content-format',
        );
    }

    query(namespace, name): Observable<RepoOrCollectionResponse> {
        return this.http.get<RepoOrCollectionResponse>(this.url, {
            params: { namespace: namespace, name: name },
        });
    }
}
