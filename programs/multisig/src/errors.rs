use anchor_lang::prelude::*;

#[error_code]
pub enum MultisigError {
    #[msg("Found multiple members with the same pubkey")]
    DuplicateMember,
    #[msg("Member is already in multisig")]
    MemberAlreadyExists,
    #[msg("Members array is empty")]
    EmptyMembers,
    #[msg("Too many members, can be up to 65535")]
    TooManyMembers,
    #[msg("Maximum number of members already reached")]
    MaxMembersReached,
    #[msg("Invalid threshold, must be between 1 and number of members")]
    InvalidThreshold,
    #[msg("Invalid authority")]
    Unauthorized,
}