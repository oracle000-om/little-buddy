/**
 * LBC segment filter — the core WHERE clause that defines
 * which animals appear on Little Buddy Club.
 *
 * Surfaces:
 *   - All puppies and young animals (regardless of origin)
 *   - All confiscated animals (breeding mills, cruelty cases, hoarding)
 *     regardless of age — including sub-typed confiscation reasons
 *
 * UNKNOWN entries are excluded until the enrichment pipeline
 * classifies them as PUPPY or YOUNG.
 */
import { IntakeReason } from '../generated/prisma/client';

const CONFISCATION_REASONS: IntakeReason[] = [
    IntakeReason.CONFISCATE,
    IntakeReason.CONFISCATE_MILL,
    IntakeReason.CONFISCATE_HOARDING,
    IntakeReason.CONFISCATE_CRUELTY,
];

export function buildLBCClause() {
    return {
        OR: [
            { ageSegment: 'PUPPY' as const },
            { ageSegment: 'YOUNG' as const },
            { intakeReason: { in: CONFISCATION_REASONS } },
        ],
    };
}
