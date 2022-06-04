class TempStructureLine {
        SimPresent: boolean;
        Charging: boolean;
        OldCreditBeforeRecharging: number;
        Sim: TopupSim;
        CreditInSim: number;
        CreditInSimAfterExecution: number;
        Modem: string;
        Port: string;
        MinCredit: number;
        ExpectedCreditInSim: number;
        FoundCreditInSim: number;
        QueueStaus: string;
        CurrentTransactions: number;
        //IncohVisibility: Visibility;
        //NewSimvisibility: Visibility;
        BonusResponse: string;
        LastBonusCheckingDate: string;
        ConcatenationStatusTransaction: string;
}