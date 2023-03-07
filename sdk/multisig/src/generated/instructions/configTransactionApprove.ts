/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  ConfigTransactionVoteArgs,
  configTransactionVoteArgsBeet,
} from '../types/ConfigTransactionVoteArgs'

/**
 * @category Instructions
 * @category ConfigTransactionApprove
 * @category generated
 */
export type ConfigTransactionApproveInstructionArgs = {
  args: ConfigTransactionVoteArgs
}
/**
 * @category Instructions
 * @category ConfigTransactionApprove
 * @category generated
 */
export const configTransactionApproveStruct = new beet.FixableBeetArgsStruct<
  ConfigTransactionApproveInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['args', configTransactionVoteArgsBeet],
  ],
  'ConfigTransactionApproveInstructionArgs'
)
/**
 * Accounts required by the _configTransactionApprove_ instruction
 *
 * @property [] multisig
 * @property [_writable_] transaction
 * @property [_writable_, **signer**] member
 * @category Instructions
 * @category ConfigTransactionApprove
 * @category generated
 */
export type ConfigTransactionApproveInstructionAccounts = {
  multisig: web3.PublicKey
  transaction: web3.PublicKey
  member: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const configTransactionApproveInstructionDiscriminator = [
  224, 64, 69, 29, 11, 24, 247, 166,
]

/**
 * Creates a _ConfigTransactionApprove_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ConfigTransactionApprove
 * @category generated
 */
export function createConfigTransactionApproveInstruction(
  accounts: ConfigTransactionApproveInstructionAccounts,
  args: ConfigTransactionApproveInstructionArgs,
  programId = new web3.PublicKey('SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf')
) {
  const [data] = configTransactionApproveStruct.serialize({
    instructionDiscriminator: configTransactionApproveInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.transaction,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.member,
      isWritable: true,
      isSigner: true,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}