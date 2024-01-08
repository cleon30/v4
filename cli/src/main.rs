use clap::Parser;

use command::Command;

mod command;

#[derive(Parser)]
struct App {
    #[command(subcommand)]
    command: Command,
}

#[tokio::main]
async fn main() -> eyre::Result<()> {
    let app = App::parse();

    match app.command {
        Command::ProgramConfigInit(command) => command.execute().await,
        Command::MultisigCreate(command) => command.execute().await,
        Command::ProposalVote(command) => command.execute().await,
        Command::VaultTransactionExecute(command) => command.execute().await,
    }
}
