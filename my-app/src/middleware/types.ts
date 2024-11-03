// src/middleware/types.ts
import { NextRequest, NextResponse } from 'next/server'

export type MiddlewareFactory = (
  middleware: MiddlewareHandler
) => MiddlewareHandler

export type MiddlewareHandler = (
  request: NextRequest,
  response?: NextResponse
) => Promise<NextResponse | undefined> | NextResponse | undefined